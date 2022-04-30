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
      return ["purple", "green", "gray"].indexOf(value) !== -1;
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
  shadow: {
    type: Boolean,
    default: false,
  },
  bold: {
    type: Boolean,
    default: false,
  },
  responsive: {
    type: Boolean,
    default: false,
  },
  to: {
    type: String
  }
});

const classes = computed(() => ({
  [$style[props.color]]: props.color,
  [$style[props.size]]: props.size,
  [$style.outline]: props.outline,
  [$style.solid]: props.solid,
  [$style.shadow]: props.shadow,
  [$style.bold]: props.bold,
  [$style.responsive]: props.responsive,
}));
</script>

<template>
    <div :class="[$style.link, classes]">
      <router-link :to="props.to">
        {{props.title}}
      </router-link>
    </div>
</template>

<style lang="scss" module>
@import "Link.module.scss";
</style>
