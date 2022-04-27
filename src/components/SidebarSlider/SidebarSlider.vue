<script setup>
import { IconDoubleArrow } from "../Icon";
import { ref, computed, useCssModule, defineEmits } from "vue";

const $style = useCssModule();
const isActive = ref(true);
const emit = defineEmits(["side-menu:state"]);

const classes = computed(() => ({
  [$style.active]: isActive.value,
}));

const onCloseClickHandler = () => {
  isActive.value = !isActive.value;
  emit("side-menu:state", isActive.value);
};
</script>

<template>
  <div :class="[$style.sidebarSlider, classes]">
    <div @click="onCloseClickHandler" :class="$style.toggleBtn"><IconDoubleArrow /></div>
    <slot />
  </div>
</template>

<style lang="scss" module>
@import "SidebarSlider.module";
</style>
