<script setup>
import { defineProps, useCssModule, computed, defineEmits } from "vue";

const $style = useCssModule();

const props = defineProps({
  title: {
    type: String,
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
  modelValue: String
});

const classes = computed(() => ({
  [$style[props.color]]: props.color,
  [$style[props.size]]: props.size,
  [$style.outline]: props.outline,
}));

const emit = defineEmits(['update:modelValue'])

const updateValue = (event) => {
    emit('update:modelValue', event.target.value)
}

</script>

<script>
export default {
  inheritAttrs: false
}
</script>

<template>
  <div :class="[$style.inputWrapper, classes]" :placeholder="props.placeholder">
    <div v-if="$slots['prepend']" :class="$style.prepend">
      <slot name="prepend" />
    </div>
    <input :value="modelValue" :class="$style.input" v-bind="$attrs" :disabled="props.disabled" type="text" @input="updateValue">
    <div v-if="$slots['append']" :class="$style.append">
      <slot name="append" />
    </div>
  </div>
</template>

<style lang="sass" module>
 @import "BaseInput.module"
</style>


