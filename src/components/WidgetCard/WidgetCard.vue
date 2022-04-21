<script setup>
import { defineProps, defineEmits, ref } from "vue";
import { SmartWidget } from "vue-smart-widget";
import { Button } from "@/components/Button";
import { IconNavigationClose } from "@/components/Icon/";
import { ChartBar, ChartRadialGauge } from "@/components/ChartComponent";

const props = defineProps({
  title: {
    type: String,
    required: false,
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
  isCharts: {
    type: Boolean,
    default: false,
  },
  previewUrl: {
    type: String,
    default: "",
  },
  width: {
    type: String,
    default: "",
  },
  height: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["widget:close"]);

// const chartData = ref({
//   type: "Bar",
//   labels: ["NOV 3", "NOV 3", "NOV 3", "NOV 3", "NOV 3"],
//   datasets: [
//     {
//       data: [64, 68, 77, 53, 77],
//       backgroundColor: "#ffffff",
//       borderRadius: "4",
//       borderSkipped: false,
//     },
//   ],
// });
const value = 56;
const chartData = ref({
  labels: ["completed", "left"],
  datasets: [
    {
      data: [value, 100-value],
      borderWidth: 0,
      text: () => {return `${value}%`},
      backgroundColor: '#ED6C45',
    },
  ],
});


</script>

<template>
  <SmartWidget
    :class="[$style.widgetCard, $style[props.color]]"
    simple
    :padding="16"
    :title="props.title"
  >
    <img
      v-if="props.isPreviewMode && props.previewUrl"
      :src="props.previewUrl"
      :alt="props.id"
      :class="$style.image"
    />
    <span v-else>
      {{ props.title }}
      <div :class="[$style.mainContent, $style.mbXS]">
        <div
          :class="[$style.mainContentItem, $style.left, $style.mainIndicator]"
        >
          77%
        </div>
        <div :class="[$style.mainContentItem, $style.right]">
          <span :class="[$style.secondIndicator]">+24%</span>
          <span :class="[$style.secondIndicatorSmall]">Last 24 Hours</span>
        </div>
      </div>
      <div v-if="isCharts" :class="$style.chart">
        <ChartBar
          v-if="chartData.type === 'Bar'"
          height="102px"
          width="100%"
          :chartData="chartData"
        />
        <ChartRadialGauge
          height="96"
          width="96"
          chartId="radial-gauge"
          :chartData="chartData"
        />
      </div>
    </span>
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
  padding: 16px;
  width: 100%;
  height: 100%;
}
</style>
