<script setup>
import { defineProps } from "vue";
import { Pie } from "vue-chartjs";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
);

const props = defineProps({
  chartData: {
    type: Object,
    required: true,
    default: () => {},
  },
  chartId: {
    type: String,
    required: true,
  },
  chartOptions: {
    type: Object,
    required: false,
    default: () => {},
  },
});

//Plugin for line styled labels
const pieOutlineLabels = {
  id: "pieOutlineLabels",
  afterDraw(chart) {
    if (chart.config.options.pieOutlineLabels) {
      const {
        ctx,
        chartArea: { top, bottom, left, right },
      } = chart;
      chart.data.datasets.forEach((dataset, i) => {
        chart.getDatasetMeta(i).data.forEach((datapoint, index) => {
          const { x, y } = datapoint.getCenterPoint();
          const chartCenterPoint = {
            x: (right - left) / 2 + left,
            y: (bottom - top) / 2 + top
          };
          const angle = Math.atan2(
            y - chartCenterPoint.y,
            x - chartCenterPoint.x
          );
          const point2X = chartCenterPoint.x + Math.cos(angle) * (datapoint.outerRadius);
          const point2Y = chartCenterPoint.y + Math.sin(angle) * (datapoint.outerRadius);
          const xLine = x >= chartCenterPoint.x ? point2X + 15 : point2X - 15;
          const yLine = y >= chartCenterPoint.y ? point2Y + 15 : point2Y - 15;
          const extraLine = x >= chartCenterPoint.x ? 20 : -20;
  
          //Draw line
          ctx.beginPath();
          ctx.moveTo(point2X, point2Y);
          ctx.lineTo(xLine, yLine);
          ctx.lineTo(xLine + extraLine, yLine);
          ctx.strokeStyle = "#00000033";
          ctx.stroke();
  
          //Text
          const text = chart.data.labels[index];
          const textXPosition = x >= chartCenterPoint.x ? "left" : "right";
          const paddingX = x >= chartCenterPoint.x ? 5 : -5;
          ctx.font = "regular 10px IBM Plex Sans";
          ctx.textAlign = textXPosition;
          ctx.textBaseline = "middle";
          ctx.fillText(text, xLine + extraLine + paddingX, yLine);
        });
      });
    }
  },
};
ChartJS.register(pieOutlineLabels);

const chartOptionsDefaults = {
  type: "Pie",
  cutout: 0,
  rotation: -55,
  borderJoinStyle: "round",
  borderWidth: false,
  responsible: true,
  maintainAspectRatio: false,
  aspectRatio: false,
  layout: {
    padding: {
      left: 50,
      right: 50,
      bottom: 30,
      top: 30,
    },
  },
  font: {
    fontColor: "ffffff",
  },
  fontColor: "ffffff",

  animation: {
    animateRotate: true,
  },
  elements: {
    arc: {
      cutout: 0, // precent
      borderWidth: 0,
      fontColor: "#ffffff",
      // roundedCornersFor: 0,
    },
  },
  pieOutlineLabels: true,
  plugins: {
    pieOutlineLabels,
    datalabels: {
      display: false
    },
    legend: {
      display: false,
    },
    tooltip: false,
  },
};
</script>
<template>
  <div>
    <Pie
      :chartId="props.chartId"
      :height="253"
      :chart-data="props.chartData"
      :chart-options="chartOptionsDefaults"
      :styles="{
        'max-height': '220px',
        margin: '0 auto',
      }"
    />
  </div>
</template>
