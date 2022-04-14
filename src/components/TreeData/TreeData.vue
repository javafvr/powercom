<script setup>
import { defineProps } from "vue";
import TreeItem from "@/components/TreeItem/TreeItem.vue";

const props = defineProps(["items"]);
</script>

<template>
  <nav :class="$style.treeData">
    <ul :class="$style.treeDataList">
      <TreeItem
        v-for="(model, index) in props.items"
        :key="index"
        :model="model"
      />
    </ul>
  </nav>
</template>

<style lang="scss" module>
@import "TreeData.module";
</style>
