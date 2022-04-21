<script setup>
import { defineProps, useCssModule, computed, ref, nextTick } from "vue";

const $style = useCssModule();

const props = defineProps({
  display: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: "gray",
    validator: function (value) {
      return ["purple", "gray"].indexOf(value) !== -1;
    },
  },
  size: {
    type: String,
    default: "S",
    validator: function (value) {
      return ["XS", "S", "M", "L", "XL"].indexOf(value) !== -1;
    },
  },
  outline: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  modelValue: String,
});

let left = ref(0);
let top = ref(0);
//eslint-disable-next-line
let show = ref(false);

const classes = computed(() => ({
  [$style[props.color]]: props.color,
  [$style[props.size]]: props.size,
  [$style.outline]: props.outline,
}));

const style = computed(() => ({
  top: top.value + "px",
  left: left.value + "px",
}));

//eslint-disable-next-line
const close = () => {
  if (!this.show) {
    return;
  }
  show = false;
  left = 0;
  top = 0;
};

//eslint-disable-next-line
const open = (event) => {
  console.log('open context', event)
  // updates position of context menu
  left = event.pageX || event.clientX;
  top = event.pageY || event.clientY;
  // make element focused
  // @ts-ignore
  nextTick(() => this.$el.focus());
  show = true;
};
</script>

<template>
  <div
    :class="[$style.menuWrapper, classes]"
    v-show="show"
    :style="style"
    tabindex="0"
    @blur="close"
  >
    <slot />
  </div>
</template>

<style lang="scss" module>
@import "ContextMenu.module";
</style>
