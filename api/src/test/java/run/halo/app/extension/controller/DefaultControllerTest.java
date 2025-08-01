package run.halo.app.extension.controller;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.ArgumentMatchers.argThat;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.time.Duration;
import java.time.Instant;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.TimeUnit;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import run.halo.app.extension.controller.Reconciler.Request;
import run.halo.app.extension.controller.Reconciler.Result;
import run.halo.app.extension.controller.RequestQueue.DelayedEntry;

@ExtendWith(MockitoExtension.class)
class DefaultControllerTest {

    @Mock
    RequestQueue<Request> queue;

    @Mock
    Reconciler<Request> reconciler;

    @Mock
    RequestSynchronizer synchronizer;

    @Mock
    ExecutorService executor;

    Instant now = Instant.now();

    Duration minRetryAfter = Duration.ofMillis(100);

    Duration maxRetryAfter = Duration.ofSeconds(10);

    DefaultController<Request> controller;

    @BeforeEach
    void setUp() {
        controller = createController(1);

        assertFalse(controller.isDisposed());
        assertFalse(controller.isStarted());
    }

    DefaultController<Request> createController(int workerCount) {
        return new DefaultController<>("fake-controller", reconciler, queue, synchronizer,
            () -> now, minRetryAfter, maxRetryAfter, executor, workerCount);
    }

    @Test
    void shouldReturnRightName() {
        assertEquals("fake-controller", controller.getName());
    }

    @Nested
    class WorkerTest {

        @Test
        void shouldCreateCorrectName() {
            var worker = controller.new Worker();
            assertEquals("fake-controller-worker-1", worker.getName());
            worker = controller.new Worker();
            assertEquals("fake-controller-worker-2", worker.getName());
            worker = controller.new Worker();
            assertEquals("fake-controller-worker-3", worker.getName());
        }

        @Test
        void shouldRunCorrectlyIfReconcilerReturnsNoReEnqueue() throws InterruptedException {
            when(queue.take()).thenReturn(new DelayedEntry<>(
                    new Request("fake-request"), Duration.ofSeconds(1), () -> now
                ))
                .thenThrow(InterruptedException.class);
            when(reconciler.reconcile(any(Request.class))).thenReturn(new Result(false, null));

            controller.new Worker().run();

            verify(synchronizer, never()).start();
            verify(queue, times(2)).take();
            verify(queue, times(0)).add(any());
            verify(queue, times(1)).done(any());
            verify(reconciler, times(1)).reconcile(eq(new Request("fake-request")));
        }

        @Test
        void shouldRunCorrectlyIfReconcilerReturnsReEnqueue() throws InterruptedException {
            when(queue.take()).thenReturn(new DelayedEntry<>(
                    new Request("fake-request"), Duration.ofSeconds(1), () -> now
                ))
                .thenThrow(InterruptedException.class);
            when(queue.add(any())).thenReturn(true);
            when(reconciler.reconcile(any(Request.class))).thenReturn(new Result(true, null));

            controller.new Worker().run();

            verify(synchronizer, never()).start();
            verify(queue, times(2)).take();
            verify(queue, times(1)).done(any());
            verify(queue, times(1)).add(argThat(de ->
                de.getEntry().name().equals("fake-request")
                    && de.getRetryAfter().equals(Duration.ofSeconds(2))));
            verify(reconciler, times(1)).reconcile(any(Request.class));
        }

        @Test
        void shouldReRunIfReconcilerThrowException() throws InterruptedException {
            when(queue.take()).thenReturn(new DelayedEntry<>(
                    new Request("fake-request"), Duration.ofSeconds(1), () -> now
                ))
                .thenThrow(InterruptedException.class);
            when(queue.add(any())).thenReturn(true);
            when(reconciler.reconcile(any(Request.class))).thenThrow(RuntimeException.class);

            controller.new Worker().run();

            verify(synchronizer, never()).start();
            verify(queue, times(2)).take();
            verify(queue, times(1)).done(any());
            verify(queue, times(1)).add(argThat(de ->
                de.getEntry().name().equals("fake-request")
                    && de.getRetryAfter().equals(Duration.ofSeconds(2))));
            verify(reconciler, times(1)).reconcile(any(Request.class));
        }

        @Test
        void canReRunIfReconcilerThrowRequeueException() throws InterruptedException {
            when(queue.take()).thenReturn(new DelayedEntry<>(
                    new Request("fake-request"), Duration.ofSeconds(1), () -> now
                ))
                .thenThrow(InterruptedException.class);
            when(queue.add(any())).thenReturn(true);
            var expectException = new RequeueException(Result.requeue(Duration.ofSeconds(2)));
            when(reconciler.reconcile(any(Request.class))).thenThrow(expectException);

            controller.new Worker().run();

            verify(synchronizer, never()).start();
            verify(queue, times(2)).take();
            verify(queue).done(any());
            verify(queue).add(argThat(de ->
                de.getEntry().name().equals("fake-request")
                    && de.getRetryAfter().equals(Duration.ofSeconds(2))));
            verify(reconciler).reconcile(any(Request.class));
        }

        @Test
        void doNotReRunIfReconcilerThrowsRequeueExceptionWithoutRequeue()
            throws InterruptedException {
            when(queue.take()).thenReturn(new DelayedEntry<>(
                    new Request("fake-request"), Duration.ofSeconds(1), () -> now
                ))
                .thenThrow(InterruptedException.class);
            var expectException = new RequeueException(Result.doNotRetry());
            when(reconciler.reconcile(any(Request.class))).thenThrow(expectException);

            controller.new Worker().run();

            verify(synchronizer, never()).start();
            verify(queue, times(2)).take();
            verify(queue).done(any());

            verify(queue, never()).add(any());
            verify(reconciler).reconcile(any(Request.class));
        }

        @Test
        void shouldSetMinRetryAfterWhenTakeZeroDelayedEntry() throws InterruptedException {
            when(queue.take()).thenReturn(new DelayedEntry<>(
                    new Request("fake-request"), minRetryAfter.minusMillis(1), () -> now
                ))
                .thenThrow(InterruptedException.class);
            when(queue.add(any())).thenReturn(true);
            when(reconciler.reconcile(any(Request.class))).thenReturn(new Result(true, null));

            controller.new Worker().run();

            verify(synchronizer, never()).start();
            verify(queue, times(2)).take();
            verify(queue, times(1)).done(any());
            verify(queue, times(1)).add(argThat(de ->
                de.getEntry().name().equals("fake-request")
                    && de.getRetryAfter().equals(minRetryAfter)));
            verify(reconciler, times(1)).reconcile(any(Request.class));
        }

        @Test
        void shouldSetMaxRetryAfterWhenTakeGreaterThanMaxRetryAfterDelayedEntry()
            throws InterruptedException {
            when(queue.take()).thenReturn(new DelayedEntry<>(
                    new Request("fake-request"), maxRetryAfter.plusMillis(1), () -> now
                ))
                .thenThrow(InterruptedException.class);
            when(queue.add(any())).thenReturn(true);
            when(reconciler.reconcile(any(Request.class))).thenReturn(new Result(true, null));

            controller.new Worker().run();

            verify(synchronizer, never()).start();
            verify(queue, times(2)).take();
            verify(queue, times(1)).done(any());
            verify(queue, times(1)).add(argThat(de ->
                de.getEntry().name().equals("fake-request")
                    && de.getRetryAfter().equals(maxRetryAfter)));
            verify(reconciler, times(1)).reconcile(any(Request.class));
        }

    }

    @Test
    void shouldDisposeCorrectly() throws InterruptedException {
        when(executor.awaitTermination(anyLong(), any())).thenReturn(true);

        controller.dispose();

        assertTrue(controller.isDisposed());
        assertFalse(controller.isStarted());

        verify(synchronizer, times(1)).dispose();
        verify(queue, times(1)).dispose();
        verify(executor).shutdown();
        verify(executor, never()).shutdownNow();
        verify(executor, times(1)).awaitTermination(anyLong(), any());
    }

    @Test
    void shouldDisposeCorrectlyEvenIfTimeoutAwaitTermination() throws InterruptedException {
        when(executor.awaitTermination(anyLong(), any()))
            .thenThrow(InterruptedException.class)
            .thenReturn(true);

        controller.dispose();

        assertTrue(controller.isDisposed());
        assertFalse(controller.isStarted());

        verify(synchronizer, times(1)).dispose();
        verify(queue, times(1)).dispose();
        verify(executor).shutdown();
        verify(executor, times(1)).shutdownNow();
        verify(executor, times(2)).awaitTermination(anyLong(), any());
    }

    @Test
    void shouldStartCorrectly() {
        controller.start();
        assertTrue(controller.isStarted());
        assertFalse(controller.isDisposed());

        verify(synchronizer).start();
        verify(executor).execute(any(Runnable.class));
    }

    @Test
    void shouldNotStartWhenDisposed() throws InterruptedException {
        when(executor.awaitTermination(1, TimeUnit.MINUTES)).thenReturn(true);
        controller.dispose();
        controller.start();
        assertFalse(controller.isStarted());
        assertTrue(controller.isDisposed());

        verify(executor, times(0)).execute(any(Runnable.class));
    }

    @Test
    void shouldCreateMultiWorkers() {
        controller = createController(5);
        controller.start();
        verify(executor, times(5)).execute(any(DefaultController.Worker.class));
    }

    @Test
    void shouldFailToCreateControllerDueToInvalidWorkerCount() {
        assertThrows(IllegalArgumentException.class, () -> createController(0));
        assertThrows(IllegalArgumentException.class, () -> createController(-1));
    }
}