<script setup>
import { ref } from "vue";
const isOpenContextMenu = ref(false);

//Methods
const open = () => {
  isOpenContextMenu.value = true;
};
const close = () => {
  isOpenContextMenu.value = false;
};
</script>

<template>
  <div :class="$style.contextMenu">
    <div @click="open" @blur="close" tabindex="0">
      <slot name="activator"></slot>
    </div>

    <div
      :class="[
        $style.content,
        { [$style.openedContextMenu]: isOpenContextMenu },
      ]"
    >
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style lang="scss" module>
@import "ContextMenu.module";
</style>
