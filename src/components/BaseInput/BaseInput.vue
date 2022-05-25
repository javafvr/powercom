<script setup>
import { defineProps, useCssModule, computed, defineEmits } from "vue";

const $style = useCssModule();

const props = defineProps({
  title: {
    type: String,
  },
  placeholder: {
    type: String,
    default: "",
  },
  block: {
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
  type: {
    type: String,
    default: "text",
    validator: function (value) {
      return ["text", "email", "password"].indexOf(value) !== -1;
    },
  },
  outline: {
    type: Boolean,
    default: false,
  },
  round: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: String,
    default: "",
  },
  label: String,
  caption: String,
  error: {
    type: Boolean,
    default: false,
  },
});

const placeholderSize = computed(() => {
  return props.placeholder.length;
});

const isDirty = computed(() => {
  if (props.modelValue === undefined) return false;
  return props.modelValue.length;
});

const classes = computed(() => ({
  [$style[props.color]]: props.color,
  [$style[props.size]]: props.size,
  [$style.outline]: props.outline,
  [$style.round]: props.round,
  [$style.dirty]: isDirty.value,
  [$style.error]: props.error,
}));

const emit = defineEmits(["update:modelValue"]);

const updateValue = (event) => {
  emit("update:modelValue", event.target.value);
};
</script>

<script>
export default {
  inheritAttrs: false,
};
</script>

<template>
  <div :class="[$style.inputWrapper, classes]">
    <div v-if="$slots['prepend']" :class="$style.prepend">
      <slot name="prepend" />
    </div>
    <div :class="$style.input">
      <span :class="$style.label" v-if="props.label">{{ props.label }}</span>
      <input
        :size="block ? placeholderSize : null"
        v-bind="$attrs"
        :disabled="props.disabled"
        @input="updateValue"
        :placeholder="props.placeholder"
        :type="props.type"
      />
      <span v-if="props.caption" :class="$style.caption">{{
        props.caption
      }}</span>
    </div>
    <div v-if="$slots['append']" :class="$style.append">
      <slot name="append" />
    </div>
  </div>
</template>

<style lang="scss" module>
@import "BaseInput.module.scss"
</style>
