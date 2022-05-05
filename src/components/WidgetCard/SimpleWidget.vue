<script setup>
import { defineProps } from "vue";
import { ChartBar, ChartRadialGauge } from "@/components/ChartComponent";

const props = defineProps({
  title: {
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
  selector: {
    type: [Boolean, Object],
    default: false,
  },
});
</script>

<template>
  <div :class="$style.contentWrapper">
    <div :class="$style.header">
      <div :class="[$style.title]">{{ props.title }}</div>
      <div :class="[$style.mainContent]">
        <div
          v-if="props.indicators"
          :class="[$style.mainContentItem, $style.left]"
        >
          <span :class="[$style.mainIndicator]">{{
            props.indicators.mainIndicator.title
          }}</span>
          <span :class="[$style.mainIndicatorDescription]">{{
            props.indicators.mainIndicator.description
          }}</span>
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
      :class="[
        $style.chart,
        $style.chart,
        { [$style.bar]: chart.type === 'bar' },
        { [$style.gauge]: chart.type === 'gauge' },
      ]"
    >
      <ChartBar
        v-if="chart.type == 'bar'"
        :chartId="props.chart.type + Math.random(30)"
        :chartData="chart.data"
        :chartOptions="chart.options"
      />
      <ChartRadialGauge
        v-if="chart.type == 'gauge'"
        chartId="radial-gauge"
        :chartData="chart.data"
      />
    </div>
  </div>
</template>

<style lang="scss" module>
@import "./SimpleWidget.module";
</style>
