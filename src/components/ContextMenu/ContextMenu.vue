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
const open = () => {
  isOpenContextMenu.value = true;
};
const close = (event) => {
  console.log(event)
  isOpenContextMenu.value = false;
};
</script>

<template>
  <div :class="$style.contextMenu">
    <div @click="open">
      <slot name="activator"></slot>
    </div>
    <div
      :class="[
        $style.content,
        { [$style.openedContextMenu]: isOpenContextMenu },
      ]"
      @blur="close($event)"
      @click="props.closeOnClick ? close($event) : false"
      tabindex="0"
    >
      <slot name="content" tabindex="0" ></slot>
    </div>
  </div>
</template>

<style lang="scss" module>
@import "ContextMenu.module";
</style>
