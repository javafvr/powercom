<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  indicators: {
    type: [Boolean, Object],
    default: false,
  },
});
</script>

<template>
  <div :class="$style.contentWrapper">
    <div :class="$style.header">
      <div :class="[$style.title]">{{ props.title }}</div>
      <div :class="[$style.mainContent]">
        <div
          v-if="props.indicators"
          :class="[$style.mainContentItem, $style.left, $style.mainIndicator]"
        >
          {{ props.indicators.mainIndicator.title }}
        </div>
        <div
          v-if="props.indicators"
          :class="[$style.mainContentItem, $style.right]"
        >
          <span :class="[$style.secondIndicator]">{{
            props.indicators.secondIndicator.title
          }}</span>
          <ul :class="[$style.secondIndicatorDesc]">
            <li>
              {{ props.indicators.secondIndicator.description }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
@import "@/components/WidgetCard/templates/TotalWidget.module";
</style>
