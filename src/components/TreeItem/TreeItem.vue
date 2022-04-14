<script setup>
import { IconArrowDropDown, IconCheckboxOutline } from "../Icon";
import { ref, computed, defineProps, useCssModule } from "vue";

const props = defineProps({
  model: Object,
});
const isOpen = ref(false);
const isFolder = computed(() => {
  return props.model.children && props.model.children.length;
});
const $style = useCssModule();
const classes = computed(() => ({
  [$style.treeItemFolder]: isFolder.value,
  [$style.treeItemOpen]: isOpen.value,
}));

function toggle() {
  isOpen.value = !isOpen.value;
}
</script>

<template>
  <li :class="[$style.treeItem, classes]">
    <div :class="$style.treeItemContent" @click="toggle">
      <IconArrowDropDown
        v-if="isFolder"
        :class="[$style.treeItemDropdownIcon]"
      />
      <IconCheckboxOutline />
      <span>{{ model.name }}</span>
    </div>
    <ul :class="$style.treeItemList" v-show="isOpen" v-if="isFolder">
      <TreeItem
        v-for="(model, index) in model.children"
        :key="index"
        :model="model"
      >
      </TreeItem>
    </ul>
  </li>
</template>

<style lang="scss" module>
@import "TreeItem.module";
</style>
