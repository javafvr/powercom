<script setup>
import { useCssModule, defineProps, defineEmits } from "vue";

const $style = useCssModule();
const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  modelValue: String,
});

const emit = defineEmits(["update:modelValue"]);

const onClickHandler = (content) => {
  emit("update:modelValue", content);
};

const isFirst = (element) => {
  return props.items[0].id === element;
};

const isLast = (element) => {
  if (props.items.length <= 1) return false;
  return props.items[props.items.length - 1].id === element;
};
</script>

<template>
  <div :class="[$style.contentToggler]">
    <div
      v-for="item in props.items"
      :key="item.id"
      :class="[
        $style.btn,
        { [$style.left]: isFirst(item.id) },
        { [$style.right]: isLast(item.id) },
        { [$style.active]: props.modelValue === item.id },
        { [$style[item.color]]: props.modelValue === item.id },
      ]"
      @click="onClickHandler(item.id)"
    >
      <component :is="item.icon"></component>
      <span :class="[$style.btnText]">{{ item.title }}</span>
    </div>
  </div>
</template>

<style lang="scss" module>
@import "ContentToggler.module.scss";
</style>
