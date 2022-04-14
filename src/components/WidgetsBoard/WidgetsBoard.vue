<script setup>
import { defineProps, ref } from "vue";
import { SmartWidgetGrid } from "vue-smart-widget";
import { WidgetCard } from "@/components/WidgetCard";

const props = defineProps({
  layout: {
    type: Array,
    required: true,
  },
});
const isEdit = ref(false);
</script>

<template>
  <div>
    <div @click="isEdit = !isEdit">
      <span v-if="isEdit">apply</span>
      <span v-else>edit</span>
    </div>
    <div :class="$style.gridWrapper">
      <smart-widget-grid
        :layout="props.layout"
        :isStatic="!isEdit"
        responsive
        resizable
        :margin="[24,24]"
      >
        <template v-for="item in props.layout" v-slot:[item.i]>
          <!-- eslint-disable-next-line vue/no-v-for-template-key-on-child -->
          <WidgetCard :key="item.i" :title="item.i" :color="item.color"/>
        </template>
      </smart-widget-grid>
    </div>
  </div>
</template>

<style lang="scss" module>
@import "WidgetsBoard.module";
</style>
