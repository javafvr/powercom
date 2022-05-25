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
        <span :class="$style.titleIcon">
          <IconPlugOff />
        </span>
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
    <div :class="$style.footer"></div>
  </div>
</template>

<style lang="scss" module>
@import "./ListWidget.module";
</style>
