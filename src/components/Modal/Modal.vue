<script setup>
import { defineProps, watch } from "vue";
import { IconNavigationClose } from "@/components/Icon";
const props = defineProps({
  isShowModal: Boolean,
  isClosable: Boolean,
});

watch(
  () => props.isShowModal,
  (newValue) => {
    if (newValue) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    }
  },
  { deep: true }
);
</script>

<template>
  <Transition name="modal">
    <div v-if="props.isShowModal" :class="$style.mask">
      <div :class="$style.wrapper">
        <div :class="$style.container">
          <div
            v-if="isClosable"
            :class="$style.closeBtn"
            @click="$emit('close')"
          >
            <IconNavigationClose />
          </div>
          <div v-if="$slots['header']" :class="$style.header">
            <slot name="header" />
          </div>
          <div v-if="$slots['body']" :class="$style.body">
            <slot name="body" />
          </div>
          <div v-if="$slots['footer']" :class="$style.footer">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" module>
@import "Modal.module";
@import "@/assets/styles/utils.module";
</style>
