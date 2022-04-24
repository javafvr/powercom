<script setup>
import { defineProps } from "vue";

const props = defineProps({
  image: {
    type: String,
    default: "",
  },
  alt: {
    type: String,
    default: "image",
  }
});
</script>
<template>
  <img
    :src="props.image"
    :alt="props.alt"
    :class="$style.image"
  />
</template>

<style lang="scss" module>
@import "PreviewWidget.module";
</style>