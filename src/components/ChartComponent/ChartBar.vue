<script setup>
import { ref, defineProps } from "vue";
import { Bar } from "vue-chartjs";
import ChartDataLabels from "chartjs-plugin-datalabels";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ChartDataLabels
);

const props = defineProps({
  chartData: {
    type: Object,
    required: true,
    default: () => {}
  },
  chartOptions: {
    type: Object,
    required: false,
    default: () => {}
  }
});

const chartOptionsDefaults = ref({
  showDatapoints: true,
  responsive: true,
  aspectRatio: 1.5,
  barThickness: 24,
  layout: {
    padding: {
      bottom: 15,
    },
  },
  scales: {
    xAxes: {
      display: false,
      barThickness: 40,
      maxBarThickness: 40,
      barPercentage: 1.0,
      categoryPercentage: 1.0,
    },
    yAxes: {
      display: false,
    },
  },
  plugins: {
    ChartDataLabels,
    tooltip: {
      intersect: true,
      position: "nearest",
      displayColors: false,
      padding: {
        left: 8,
        right: 8,
        top: 6,
        bottom: 6,
      },
      backgroundColor: "#FEFCFD",
      titleColor: "#261926",
      titleFont: {
        size: 14,
      },
      bodyColor: "#261926",
      kernerRadius: 8,
      xAlign: "center",
      yAlign: "bottom",
      caretSize: 6,
    },
    legend: {
      display: false,
    },
    datalabels: {
      labels: {
        value: {
          font: {
            weight: "bold",
            size: 7,
          },
          formatter: Math.round,
          anchor: "end",
          align: "start",
        },
        title: {
          font: {
            weight: "bold",
            size: 6,
          },
          formatter: function (value, context) {
            return props.chartData.labels[context.dataIndex];
          },
          anchor: "start",
          align: "end",
          offset: -18,
          color: "#ffffff",
        },
      },
    },
  },
});
</script>

<template>
  <div>
    <Bar :chart-data="props.chartData" :chart-options="props.chartOptions || chartOptionsDefaults" />
  </div>
</template>

<style lang="scss" module>
@import "ChartBar.module";
</style>
