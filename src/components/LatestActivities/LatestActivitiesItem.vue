<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: false,
  },
  items: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <div :class="[$style.latestActivitiesItem]">
    <div
      :class="[
        $style.header,
        $style.flex,
        $style.alignCenter,
        $style.justifyBetween,
      ]"
    >
      <div :class="[$style.flex, $style.alignCenter]">
        <component :is="props.icon"></component>
        <span>
          {{ props.title }}
        </span>
      </div>
      <IconChevronRight />
    </div>
    <div
      :class="$style.blockItem"
      v-for="item in props.items"
      :key="item.title"
    >
      <div>
        <div :class="$style.title">{{ item.title }}</div>
        <div :class="$style.subtitle">{{ item.subtitle }}</div>
      </div>
      <div :class="$style.status">{{ item.status }}</div>
    </div>
  </div>
</template>

<style lang="scss" module>
@import "LatestActivitiesItem.module";
@import "@/assets/styles/utils.module";
</style>
