<script setup>
import { defineProps } from "vue";
import { SmartWidget } from "vue-smart-widget";

const props = defineProps({
  title: {
    type: String,
    required: false,
  },
  color: {
    type: String,
    default: 'blue',
    required: false,
  },
});
// const isEdit = ref(false);
</script>

<template>
  <div :class="[$style.widgetCard, $style[props.color]]">
    <SmartWidget simple :padding="0" :title="props.title" >
    {{props.title}}
    </SmartWidget>
  </div>
</template>

<style lang="scss" module>
  @import "WidgetCard.module";
</style>
