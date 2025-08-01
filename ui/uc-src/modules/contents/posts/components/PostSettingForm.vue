<script lang="ts" setup>
import HasPermission from "@/components/permission/HasPermission.vue";
import { FormType } from "@/types/slug";
import { formatDatetime, toISOString } from "@/utils/date";
import useSlugify from "@console/composables/use-slugify";
import type { FormKitNode } from "@formkit/core";
import { publicApiClient } from "@halo-dev/api-client";
import { IconRefreshLine } from "@halo-dev/components";
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import type { PostFormState } from "../types";

const { t } = useI18n();

const props = withDefaults(
  defineProps<{
    name?: string;
    formState?: PostFormState;
    updateMode?: boolean;
  }>(),
  {
    name: undefined,
    formState: undefined,
    updateMode: false,
  }
);

const internalFormState = ref<PostFormState>(
  props.formState || {
    title: "",
    slug: "",
    categories: [],
    tags: [],
    excerptAutoGenerate: true,
    excerptRaw: "",
    allowComment: true,
    pinned: false,
    visible: "PUBLIC",
    publishTime: undefined,
    cover: undefined,
  }
);

const emit = defineEmits<{
  (event: "submit", data: PostFormState): void;
}>();

function onSubmit(data: PostFormState) {
  emit("submit", {
    ...data,
    publishTime: data.publishTime ? toISOString(data.publishTime) : undefined,
  });
}

// slug
const { handleGenerateSlug } = useSlugify(
  computed(() => internalFormState.value?.title || ""),
  computed({
    get() {
      return internalFormState.value?.slug || "";
    },
    set(value) {
      internalFormState.value.slug = value;
    },
  }),
  computed(() => !props.updateMode),
  FormType.POST
);

// fixme: check if slug is unique
// Finally, we need to check if the slug is unique in the database
async function slugUniqueValidation(node: FormKitNode) {
  const value = node.value;
  if (!value) {
    return true;
  }

  const fieldSelector = [`spec.slug=${value}`];

  if (props.name) {
    fieldSelector.push(`metadata.name!=${props.name}`);
  }

  const { data: postsWithSameSlug } =
    await publicApiClient.content.post.queryPosts({
      fieldSelector,
    });

  return !postsWithSameSlug.total;
}

const isScheduledPublish = computed(() => {
  const { publishTime } = internalFormState.value;
  return publishTime && new Date(publishTime) > new Date();
});

const publishTimeHelp = computed(() => {
  return isScheduledPublish.value
    ? t("core.post.settings.fields.publish_time.help.schedule_publish", {
        datetime: formatDatetime(internalFormState.value.publishTime),
      })
    : "";
});
</script>

<template>
  <!-- @vue-ignore -->
  <FormKit
    id="post-setting-form"
    v-model="internalFormState"
    type="form"
    name="post-setting-form"
    :config="{ validationVisibility: 'submit' }"
    @submit="onSubmit"
  >
    <div>
      <div class="md:grid md:grid-cols-4 md:gap-6">
        <div class="md:col-span-1">
          <div class="sticky top-0">
            <span class="text-base font-medium text-gray-900">
              {{ $t("core.post.settings.groups.general") }}
            </span>
          </div>
        </div>
        <div class="mt-5 divide-y divide-gray-100 md:col-span-3 md:mt-0">
          <FormKit
            :label="$t('core.post.settings.fields.title.label')"
            type="text"
            name="title"
            validation="required|length:0,100"
          ></FormKit>
          <FormKit
            :label="$t('core.post.settings.fields.slug.label')"
            name="slug"
            type="text"
            validation="required|length:0,100|slugUniqueValidation"
            :validation-rules="{ slugUniqueValidation }"
            :validation-messages="{
              slugUniqueValidation: $t(
                'core.common.form.validation.slug_unique'
              ),
            }"
            :help="$t('core.post.settings.fields.slug.help')"
          >
            <template #suffix>
              <div
                v-tooltip="$t('core.post.settings.fields.slug.refresh_message')"
                class="group flex h-full cursor-pointer items-center border-l px-3 transition-all hover:bg-gray-100"
                @click="handleGenerateSlug(true)"
              >
                <IconRefreshLine
                  class="h-4 w-4 text-gray-500 group-hover:text-gray-700"
                />
              </div>
            </template>
          </FormKit>
          <FormKit
            :label="$t('core.post.settings.fields.categories.label')"
            name="categories"
            type="categorySelect"
            :multiple="true"
          />
          <FormKit
            :label="$t('core.post.settings.fields.tags.label')"
            name="tags"
            type="tagSelect"
            :multiple="true"
          />
          <FormKit
            :value="true"
            name="excerptAutoGenerate"
            :label="$t('core.post.settings.fields.auto_generate_excerpt.label')"
            type="checkbox"
          >
          </FormKit>
          <FormKit
            v-if="!internalFormState.excerptAutoGenerate"
            :label="$t('core.post.settings.fields.raw_excerpt.label')"
            name="excerptRaw"
            type="textarea"
            :rows="5"
            validation="length:0,1024"
          ></FormKit>
        </div>
      </div>

      <div class="py-5">
        <div class="border-t border-gray-200"></div>
      </div>

      <div class="md:grid md:grid-cols-4 md:gap-6">
        <div class="md:col-span-1">
          <div class="sticky top-0">
            <span class="text-base font-medium text-gray-900">
              {{ $t("core.post.settings.groups.advanced") }}
            </span>
          </div>
        </div>
        <div class="mt-5 divide-y divide-gray-100 md:col-span-3 md:mt-0">
          <FormKit
            name="allowComment"
            :label="$t('core.post.settings.fields.allow_comment.label')"
            type="checkbox"
          ></FormKit>
          <FormKit
            :label="$t('core.post.settings.fields.pinned.label')"
            name="pinned"
            type="checkbox"
          ></FormKit>
          <FormKit
            :options="[
              { label: $t('core.common.select.public'), value: 'PUBLIC' },
              {
                label: $t('core.common.select.private'),
                value: 'PRIVATE',
              },
            ]"
            :label="$t('core.post.settings.fields.visible.label')"
            name="visible"
            type="select"
          ></FormKit>
          <FormKit
            name="publishTime"
            :label="$t('core.post.settings.fields.publish_time.label')"
            type="datetime-local"
            min="0000-01-01T00:00"
            max="9999-12-31T23:59"
            :help="publishTimeHelp"
          ></FormKit>
          <HasPermission
            :permissions="['system:attachments:view', 'uc:attachments:manage']"
          >
            <FormKit
              name="cover"
              :label="$t('core.post.settings.fields.cover.label')"
              type="attachment"
              :accepts="['image/*']"
              validation="length:0,1024"
            ></FormKit>
          </HasPermission>
        </div>
      </div>
    </div>
  </FormKit>
</template>
