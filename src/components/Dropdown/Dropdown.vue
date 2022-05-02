<script setup>
import { defineProps, useCssModule, computed, ref, defineEmits, onMounted } from "vue";
import ContextMenu from "@/components/ContextMenu";

const $style = useCssModule();
const props = defineProps({
  options: {
    type: Array,
    default: () => []
  },
  modelValue: Object,
});

const state = ref({});

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

const updateValue = (item) => {
  state.value = item;
  emit("update:modelValue", state.value);
};

onMounted(() => {
  state.value = props.modelValue;
})
</script>

<template>
  <ContextMenu>
    <template #activator>
      <div :class="$style.dropdown">
        <div :class="$style.text">{{modelValue.title}}</div>
        <IconArrowDropDown height="16" width="16" />
      </div>
    </template>
    <template #content>
      <ul :class="$style.list">
        <li v-for="item in props.options" :key="item.value" :class="[$style.mbXS, $style.listItem]" @click="updateValue(item)">{{item.title}}</li>
      </ul>
    </template>
  </ContextMenu>
</template>

<style lang="scss" module>
@import "Dropdown.module.scss";
</style>
