<script setup>
import { defineProps, useCssModule, computed, ref, defineEmits, onMounted } from "vue";

const $style = useCssModule();
const props = defineProps({
  label: {
    type: String,
  },
  color: {
    type: String,
    default: "purple",
    validator: function (value) {
      return ["purple", "green", "gray"].indexOf(value) !== -1;
    },
  },
  size: {
    type: String,
    default: "",
    validator: function (value) {
      return ["", "XS", "S", "M", "L", "XL"].indexOf(value) !== -1;
    },
  },
  outline: {
    type: Boolean,
    default: false,
  },
  modelValue: String,
});

const state = ref("unchecked");

const isChecked = computed(() => {
  return state.value === "checked" ? true : false;
});

const isIndeterminate = computed(() => {
  return state.value === "indeterminate" ? true : false;
});

const classes = computed(() => ({
  [$style.checked]: isChecked.value,
}));

const emit = defineEmits(["update:modelValue"]);

const updateValue = () => {
  state.value = state.value === "checked" ? "unchecked" : "checked";
  console.log(state.value);
  emit("update:modelValue", state.value);
};

onMounted(() => {
  state.value = props.modelValue;
})
</script>

<template>
  <div :class="[$style.checkbox, classes]" @click.stop="updateValue">
    <div :class="$style.inputWrapper">
      <span v-if="isChecked && !isIndeterminate" :class="$style.checkmark">
        <IconCheck />
      </span>
      <span v-if="isIndeterminate" :class="$style.indeterminate"></span>
      <input
        type="checkbox"
        :class="[$style.input]"
        :indeterminate.prop="isIndeterminate"

        :value="modelValue"
      />
    </div>
    <div :class="$style.label">
      {{ props.label }}
    </div>
  </div>
</template>

<style lang="scss" module>
@import "Checkbox.module.scss";
</style>
