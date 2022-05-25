<script setup>
import { defineProps, useCssModule, computed, ref, defineEmits, onMounted } from "vue";
import IconNavigationClose from "@/components/Icon/IconNavigationClose";

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
  round: {
    type: Boolean,
    default: false,
  },
  modelValue: Boolean,
});

const state = ref(false);

const classes = computed(() => ({
  [$style.active]: state.value,
  [$style.round]: props.round,
  [$style[props.color]]: props.color,
  [$style[props.size]]: props.size,
}));

const emit = defineEmits(["update:modelValue"]);

const updateValue = () => {
  state.value = !state.value;
  console.log(state.value);
  emit("update:modelValue", state.value);
};

const close = () => {
  state.value = false;
  emit("update:modelValue", state.value);
};

onMounted(() => {
  state.value = props.modelValue;
})
</script>

<template>
  <div :class="[$style.tagToggle, classes]" @click="updateValue()">
    <div :class="$style.label">{{ props.label }}</div>
    <div :class="$style.close" @click.stop="close()">
      <IconNavigationClose width="16" height="16"/>
    </div>
  </div>
</template>

<style lang="scss" module>
@import "tagToggle.module.scss";
</style>
