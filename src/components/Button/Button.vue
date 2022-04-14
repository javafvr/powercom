<script setup>
import { defineProps, useCssModule, computed } from "vue";

const $style = useCssModule();
const props = defineProps({
  title: {
    type: String,
  },
  color: {
    type: String,
    default: "purple",
    validator: function (value) {
      return ["purple", "green"].indexOf(value) !== -1;
    },
  },
  size: {
    type: String,
    default: "",
    validator: function (value) {
      return ["", "XS", "S", "M", "L", "XL"].indexOf(value) !== -1;
    },
  },
  outline: {
    type: Boolean,
    default: false,
  },
  solid: {
    type: Boolean,
    default: false,
  },
});

const classes = computed(() => ({
  [$style[props.color]]: props.color,
  [$style[props.size]]: props.size,
  [$style.outline]: props.outline,
  [$style.solid]: props.solid,
}));
</script>

<template>
  <div :class="[$style.button, classes]">
    <div v-if="$slots['prepend']" :class="$style.prepend"><slot name="prepend" /></div>
    <span v-if="props.title">
      {{props.title}}
    </span>
  </div>
</template>

<style lang="scss" module>
@import "Button.module";
</style>
