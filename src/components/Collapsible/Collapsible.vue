<script setup>
import { useCssModule, computed, ref } from "vue";
import {IconArrowDropDown} from "@/components/Icon";

const $style = useCssModule();
// const props = defineProps({
//   transitionDuration: {
//     type: String,
//     default: '400ms',
//   }
// });

const isOpen = ref(false);

const classes = computed(() => ({
  [$style.triggerOpen]: isOpen.value,
  [$style.triggerClosed]: !isOpen.value,
}));

const onClickHandler = () => {
  isOpen.value = !isOpen.value;
};

// onMounted(() => {
//   state.value = props.modelValue;
// })
</script>

<template>
  <div :class="[$style.collapsible, classes]">
    <button
      @click.prevent="onClickHandler"
      type="button"
      :class="$style.trigger"
    >
      <slot name="trigger" />
      <IconArrowDropDown width="16" height="16"/>
    </button>

    <Transition name="slide" mode="in-out">
      <div
        :class="$style.content"
        v-show="isOpen"
      >
          <div :class="$style.contentInner" ref="inner">
            <slot></slot>
          </div>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" module>
@import "Collapsible.module.scss";
</style>
