<script setup>
import { defineProps, defineEmits } from "vue";
import { SmartWidget } from "vue-smart-widget";
import { Button } from "@/components/Button";
import { IconNavigationClose } from "@/components/Icon/";
import PreviewWidget from "@/components/WidgetCard/PreviewWidget";
import AlertsWidget from "@/components/WidgetCard/AlertsWidget";
import SimpleWidget from "@/components/WidgetCard/SimpleWidget";
import ListWidget from "@/components/WidgetCard/ListWidget";
import TotalWidget from "@/components/WidgetCard/TotalWidget";
import TotalChartWidget from "@/components/WidgetCard/TotalChartWidget";

const props = defineProps({
  title: {
    type: String,
    required: false,
  },
  template: {
    type: String,
    required: false,
    default: "simpleWidget",
    validator: function (value) {
      return (
        [
          "",
          "totalChartWidget",
          "totalWidget",
          "previewWidget",
          "gaugeWidget",
          "simpleWidget",
          "listWidget",
          "alertsWidget",
        ].indexOf(value) !== -1
      );
    },
  },
  isEditMode: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: "blue",
    required: false,
  },
  isPreviewMode: {
    type: Boolean,
    default: false,
  },
  previewUrl: {
    type: String,
    default: "",
  },
  breakpoint: {
    type: String,
    default: "sm",
  },
  width: {
    type: String,
    default: "",
  },
  height: {
    type: String,
    default: "",
  },
  indicators: {
    type: [Boolean, Object],
    default: false,
  },
  chart: {
    type: [Boolean, Object],
    default: false,
  },
  content: {
    type: [Boolean, Array],
    default: false,
  },
  selector: {
    type: [Boolean, Object],
    default: false,
  },
});

const emit = defineEmits(["widget:close"]);
</script>

<template>
  <SmartWidget
    :class="[$style.widgetCard, $style[props.color]]"
    simple
    :title="props.title"
  >
    <PreviewWidget
      v-if="props.template === 'previewWidget'"
      :image="props.previewUrl"
      :alt="props.id"
    />
    <AlertsWidget
      v-if="props.template === 'alertsWidget'"
      :title="props.title"
      :content="props.content"
    />
    <SimpleWidget
      v-if="props.template === 'simpleWidget'"
      :title="props.title"
      :indicators="props.indicators"
      :chart="props.chart"
      :selector="props.selector"
    />
    <TotalChartWidget
      v-if="props.template === 'totalChartWidget'"
      :title="props.title"
      :indicators="props.indicators"
      :chart="props.chart"
      :color="props.color"
    />
    <TotalWidget
      v-if="props.template === 'totalWidget'"
      :title="props.title"
      :indicators="props.indicators"
    />
    <ListWidget
      v-if="props.template === 'listWidget'"
      :title="props.title"
      :list="props.content"
    />
    <span
      v-if="props.isEditMode && !props.isPreviewMode"
      :class="$style.closeBtn"
    >
      <Button @click="emit('widget:close')" size="S" color="gray" solid>
        <template #prepend>
          <IconNavigationClose />
        </template>
      </Button>
    </span>
  </SmartWidget>
</template>

<style lang="scss" module>
@import "WidgetCard.module";
@import "@/assets/styles/utils.module";
</style>

<style lang="scss">
.widget-body-simple {
  position: relative;
  height: 100%;
}
.widget-body__content {
  padding: 0px;
  width: 100%;
  height: 100%;
}
</style>
