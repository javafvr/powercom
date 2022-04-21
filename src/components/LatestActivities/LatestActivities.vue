<script setup>
import { defineProps } from "vue";
import { LatestActivitiesItem } from "@/components/LatestActivities";


const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div :class="[$style.latestActivities]">
    <h3 :class="[$style.title3, $style.w100, $style.textCenter, $style.mbS]">Latest activities</h3>
    <LatestActivitiesItem
      v-for="item in props.items"
      :key="item.title"
      :title="item.title"
      :icon="item.icon"
      :items="item.items"
    />
  </div>
</template>

<style lang="scss" module>
@import "LatestActivities.module";
@import "@/assets/styles/utils.module";
</style>
