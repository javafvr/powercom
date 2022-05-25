<script setup>
import { ref, defineProps } from "vue";
const isOpenContextMenu = ref(false);

const props = defineProps({
  closeOnClick: {
    type: Boolean,
    default: true
  },
});

//Methods
const close = () => {
  isOpenContextMenu.value = false;
};
</script>

<template>
  <div :class="$style.contextMenu" v-click-outside="() => isOpenContextMenu = false">
    <div @click="() => isOpenContextMenu = !isOpenContextMenu">
      <slot name="activator"></slot>
    </div>
    <div
      :class="[
        $style.content,
        { [$style.openedContextMenu]: isOpenContextMenu },
      ]"
      @click="props.closeOnClick ? close() : false"
      tabindex="0"
    >
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style lang="scss" module>
@import "ContextMenu.module";
</style>
