<script setup>
// import { defineProps, defineEmits, onMounted, ref } from "vue";
import { defineProps } from "vue";
const props = defineProps({
  title: {
    type: String,
  },
  image: {
    type: String,
  },
  url: {
    type: String,
    default: "/"
  }
});
</script>

<template>
  <router-link :to="props.url" :class="$style.imageCard">
    <div :class="$style.image">
      <img :src="props.image" :alt="props.title">
    </div>
    <span :class="$style.title">{{props.title}}</span>
  </router-link>
</template>

<style lang="sass" module>
@import "ImageCard.module"
</style>
