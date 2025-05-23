<script lang="ts" setup>
import {
  getCategoryPath,
  type CategoryTreeNode,
} from "@console/modules/contents/posts/categories/utils";
import type { Category } from "@halo-dev/api-client";
import { IconClose } from "@halo-dev/components";
import { computed, inject, ref, type Ref } from "vue";

const props = withDefaults(
  defineProps<{
    category: Category;
  }>(),
  {}
);

const emit = defineEmits<{
  (event: "select", category: CategoryTreeNode | Category): void;
}>();

const categoriesTree = inject<Ref<CategoryTreeNode[]>>(
  "categoriesTree",
  ref([])
);

const label = computed(() => {
  const categories = getCategoryPath(
    categoriesTree.value,
    props.category.metadata.name
  );
  return categories
    ?.map((category: CategoryTreeNode) => category.spec.displayName)
    .join(" / ");
});
</script>

<template>
  <div class="inline-flex items-center p-1">
    <div
      class="box-border inline-flex min-h-[1.25rem] items-center gap-1 rounded-full border border-solid border-[#d9d9d9] bg-white px-1 align-middle"
    >
      <span class="flex-1 text-xs">
        {{ label }}
      </span>
      <IconClose
        class="h-4 w-4 cursor-pointer text-gray-600 hover:text-gray-900"
        @click="emit('select', category)"
      />
    </div>
  </div>
</template>
