package run.halo.app.theme;

import static org.mockito.Mockito.when;

import java.util.LinkedHashSet;
import java.util.List;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.reactive.AutoConfigureWebTestClient;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Import;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.reactive.server.WebTestClient;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Mono;
import run.halo.app.core.extension.Menu;
import run.halo.app.core.extension.MenuItem;
import run.halo.app.extension.ExtensionClient;
import run.halo.app.extension.Metadata;
import run.halo.app.infra.InitializationStateGetter;

@SpringBootTest
@Import(ThemeIntegrationTest.TestConfig.class)
@AutoConfigureWebTestClient
@DirtiesContext
public class ThemeIntegrationTest {

    @Autowired
    WebTestClient webClient;

    @MockBean
    InitializationStateGetter initializationStateGetter;

    @Autowired
    ExtensionClient client;

    @BeforeEach
    void setUp() {
        when(initializationStateGetter.userInitialized()).thenReturn(Mono.just(true));

        // create a menu item
        var menuItem = new MenuItem();
        menuItem.setMetadata(new Metadata());
        menuItem.getMetadata().setName("main-menu-home");
        menuItem.setSpec(new MenuItem.MenuItemSpec());
        menuItem.getSpec().setDisplayName("Home");
        menuItem.getSpec().setHref("/");
        client.create(menuItem);

        // create a primary menu
        var menu = new Menu();
        menu.setMetadata(new Metadata());
        menu.getMetadata().setName("main-menu");
        menu.setSpec(new Menu.Spec());
        menu.getSpec().setDisplayName("Mail Menu");
        menu.getSpec().setMenuItems(new LinkedHashSet<>(List.of("main-menu-home")));
        client.create(menu);
    }

    @TestConfiguration
    static class TestConfig {

        @Bean
        RouterFunction<ServerResponse> noTemplateExistsRoute() {
            return RouterFunctions.route()
                .GET(
                    "/no-template-exists",
                    request -> ServerResponse.ok().render("no-template-exists")
                )
                .build();
        }

    }

    @Test
    void shouldRespondNotFoundIfNoTemplateFound() {
        webClient.get().uri("/no-template-exists")
            .accept(MediaType.TEXT_HTML)
            .exchange()
            .expectStatus().isNotFound()
            .expectBody(String.class)
            .value(Matchers.containsString("Template no-template-exists was not found"));
    }

}
