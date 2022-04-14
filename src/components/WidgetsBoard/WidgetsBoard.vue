<script setup>
import { defineProps, ref } from "vue";
import { SmartWidgetGrid } from "vue-smart-widget";
import { WidgetCard } from "@/components/WidgetCard";
import { Button } from "@/components/Button";
import {
  IconModeEdit,
  IconCheckCircle,
  IconPageView,
  IconContentAdd,
} from "@/components/Icon";

const props = defineProps({
  layout: {
    type: Array,
    required: true,
  },
});
const isEdit = ref(false);

const onClickEditHandler = () => {
  isEdit.value = !isEdit.value;
  // emit("side-menu:state", isActive.value);
};
</script>

<template>
  <div :class="$style.widgetsBoard">
    <div :class="$style.gridHeader">
      <div :class="$style.mbL">
        <div :class="$style.mbXSS"><b>Recently Used</b></div>
        <Button title="Inventory" color="purple" size="M" outline></Button>
        <Button title="Workorder" color="purple" size="M" outline></Button>
        <Button title="Assets" color="purple" size="M" outline></Button>
        <Button title="Commands" color="purple" size="M" outline></Button>
        <Button
          title="Command Results"
          color="purple"
          size="M"
          outline
        ></Button>
        <Button title="Alerts/Vee" color="purple" size="M" outline></Button>
      </div>
      <div :class="$style.mbXSS"><b>Current Area: Fedor_Demo</b></div>
      <div :class="[$style.flex, $style.justifyBetween, $style.mbS]">
        <Button title="View details" color="purple">
          <template #prepend>
            <IconPageView />
          </template>
        </Button>
        <Button
          :title="isEdit ? 'Apply' : 'Edit'"
          :color="isEdit ? 'green' : 'purple'"
          @click="onClickEditHandler"
        >
          <template #prepend>
            <IconCheckCircle v-if="isEdit" />
            <IconModeEdit v-else />
          </template>
        </Button>
      </div>
      <div v-if="isEdit">
        <Button title="Add New" color="purple" size="L" solid>
          <template #prepend>
            <IconContentAdd />
          </template>
        </Button>
      </div>
    </div>
    <div :class="$style.gridWrapper">
      <smart-widget-grid
        :layout="props.layout"
        :isStatic="!isEdit"
        responsive
        resizable
        :margin="[24, 24]"
      >
        <template v-for="item in props.layout" v-slot:[item.i]>
          <!-- eslint-disable-next-line vue/no-v-for-template-key-on-child -->
          <WidgetCard :key="item.i" :title="item.i" :color="item.color" />
        </template>
      </smart-widget-grid>
    </div>
  </div>
</template>

<style lang="scss" module>
@import "WidgetsBoard.module";
@import "@/assets/styles/utils.module";
</style>
