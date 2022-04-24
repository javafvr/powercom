<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  list: {
    type: [Boolean, Array],
    default: false,
  },
});
</script>

<template>
  <div :class="$style.contentWrapper">
    <div :class="$style.header">
      <div :class="[$style.title]">
        <IconPlugOff />
        <span>{{ props.title }}</span>
      </div>
    </div>
    <ul v-if="props.list" :class="$style.list">
      <li v-for="record in props.list" :key="record.title" :class="$style.listItem">
        <div :class="$style.listItemTitle">
          {{record.title}}
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" module>
@import "@/components/WidgetCard/templates/ListWidget.module";
</style>
