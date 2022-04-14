<script setup>
import { IconDoubleArrow } from "../Icon";
import { ref, computed, useCssModule, defineEmits } from "vue";

const $style = useCssModule();
const isActive = ref(true);
const emit = defineEmits(["side-menu:state"]);

const classes = computed(() => ({
  [$style.sidebarActive]: isActive.value,
}));

const onCloseClickHandler = () => {
  isActive.value = !isActive.value;
  emit("side-menu:state", isActive.value);
};
</script>

<template>
  <div :class="[$style.sidebar, classes]">
    <div @click="onCloseClickHandler" :class="$style.sidebarBtn"><IconDoubleArrow /></div>
    <slot />
  </div>
</template>

<style lang="scss" module>
@import "Sidebar.module";
</style>
