<script setup>
import { defineProps, ref, computed } from "vue";

const props = defineProps(["items"]);
const divider = "/";

const genBreadcrumbs = computed(() => {
  const result = [];
  for (let i = 0; i < props.items.length; i++) {
    const item = props.items[i];
    if (i && item !== props.items[props.items.length]) {
      result.push({ text: divider });
    }
    result.push(item);
  }
  return result;
});

const breadcrumbs = ref(genBreadcrumbs);
</script>

<template>
  <div :class="$style.breadcrumbs">
    <ul :class="$style.breadcrumbsList">
      <li
        v-for="(item, index) in breadcrumbs"
        :key="index"
        :class="[
          $style.breadcrumbsItem,
          { [$style.breadcrumbsItemLink]: item.link },
        ]"
      >
        <span v-if="!item.link">{{ item.text }}</span>
        <span v-else>
          <router-link :to="item.link">{{ item.text }}</router-link>
        </span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" module>
@import "Breadcrumbs.module";
</style>
