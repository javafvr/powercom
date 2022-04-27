<script setup>
import { defineProps } from "vue";
import { Button } from "@/components/Button";
import {
  ChartBar,
  ChartRadialGauge,
  ChartPie,
} from "@/components/ChartComponent";

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  color: {
    type: String,
    default: "blue",
  },
  indicators: {
    type: [Boolean, Object],
    default: false,
  },
  chart: {
    type: [Boolean, Object],
    default: false,
  },
  selector: {
    type: [Boolean, Object],
    default: false,
  },
});
</script>

<template>
  <div :class="[$style.contentWrapper, $style[props.color]]">
    <div :class="$style.header">
      <div :class="[$style.title, $style.mbXSSS]">
        <span>{{ props.title }}</span>
        <div :class="$style.controls">
          <Button title="Connection type" color="purple" size="S" bold>
            <template #prepend>
              <IconImportExport />
            </template>
          </Button>
        </div>
      </div>
      <div :class="[$style.mainContent, $style.mbXS]">
        <div
          v-if="props.indicators"
          :class="[$style.mainContentItem, $style.left, $style.mainIndicator]"
        >
          {{ props.indicators.mainIndicator.title }}
        </div>
        <div
          v-if="props.indicators"
          :class="[$style.mainContentItem, $style.right]"
        >
          <span :class="[$style.secondIndicator]">{{
            props.indicators.secondIndicator.title
          }}</span>
          <ul :class="[$style.secondIndicatorDesc]">
            <li>
              {{ props.indicators.secondIndicator.description }}
            </li>
          </ul>
        </div>
        <div
          v-if="props.selector"
          :class="[$style.mainContentItem, $style.left]"
        >
          <span :class="[$style.secondIndicator]">
            <div :class="$style.selector">
              {{ props.selector.options[0].title }} <IconArrowDropDown />
            </div>
          </span>
        </div>
      </div>
    </div>
    <div
      v-if="chart"
      :class="[$style.chart, { [$style.pie]: chart.type === 'pie' }]"
    >
      <ChartBar
        v-if="chart.type == 'bar'"
        height="102px"
        width="100%"
        chartId="chart-bar"
        :chartData="chart.data"
      />
      <ChartRadialGauge
        v-if="chart.type == 'gauge'"
        height="96"
        width="96"
        chartId="radial-gauge"
        :chartData="chart.data"
      />
      <ChartPie
        v-if="chart.type == 'pie'"
        height="96"
        width="96"
        chartId="chart-pie"
        :chartData="chart.data"
      />
    </div>
  </div>
</template>

<style lang="scss" module>
@import "./TotalChartWidget.module";
</style>
