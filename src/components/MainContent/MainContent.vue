<script setup>
import { computed, useCssModule, defineProps } from "vue";

const $style = useCssModule();
const props = defineProps({
    isSidebarOpened: {
      type: Boolean,
      default: false
    },
    isStaticSideMenu: {
      type: Boolean,
      default: false
    },
  });
const classes = computed(() => ({
  [$style.mainContentSidebarOpen]: props.isSidebarOpened,
  [$style.mainContentSideMenu]: props.isStaticSideMenu,
}));
</script>

<template>
  <div
    :class="[$style.mainContent, classes]"
    @side-menu:state="onToggleContentHandler"
  >
    <slot />
  </div>
</template>

<style lang="scss" module>
@import "MainContent.module";
</style>
