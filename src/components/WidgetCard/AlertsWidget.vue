<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  content: {
    type: [Boolean, Array],
    default: false,
  },
});
</script>

<template>
  <div :class="$style.contentWrapper">
    <div :class="$style.header">
      <div :class="[$style.title]">
        <IconError />
        <span>{{ props.title }}</span>
      </div>
    </div>
    <div v-if="props.content" :class="$style.content">
      <div v-for="record in props.content" :key="record.title" :class="$style.contentItem">
        <div :class="$style.contentTitle">
          {{record.title}}
        </div>
        <div :class="$style.contentSubTitle">
          {{record.subtitle}}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
@import "./AlertsWidget.module";
</style>
