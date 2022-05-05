<script setup>
import { ref, defineProps, onMounted, watch } from "vue";
import useBreakpoints from "@/composables/_breakpoints.js"
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
  chartId: {
    type: String
  },
  chartData: {
    type: Object,
    required: true,
    default: () => {}
  },
  chartOptions: {
    type: Object,
    required: false,
    default: () => {}
  },
});

const { width } = useBreakpoints();
const chartOptionsDefaults = ref({
  showDatapoints: true,
  responsive: true,
  maintainAspectRatio: true,
  aspectRatio: 1.5,
  categorySpacing: 4,
  barThickness: 24,
  // maxBarThickness: 40,
  layout: {
    padding: {
      bottom: 15,
    },
  },
  scales: {
    xAxes: {
      display: false,
      // barThickness: 40,
      // maxBarThickness: 40,
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

watch(
  () => width,
  (newValue) => {
    console.log(newValue)
    updateConfigByMutating();
  }
);

const updateConfigByMutating = () => {
  // let chartWidth = document.getElementById('info-box').clientHeight
  const chart = ChartJS.getChart(props.chartId);
  // console.log('breakpoint', this)
  // console.log('width chart ', chart.getDatasetMeta())
  // console.log('chart data ', props.chartData)
  // switch (breakpoint.value) {
  //   case "xxxl":
  //     break;
  //   default:
  //     break;
  // }
  
  chartOptionsDefaults.value.barThickness = Math.round((+chart.chartArea.width / 5) - (4*5));
  console.log('chart width ', chart.chartArea.width);
  console.log('thickness ', chartOptionsDefaults.value.barThickness);

  chart.update();
}


onMounted(()=>{
  // let chartWidth = document.getElementById('info-box').clientHeight
  // const chart = ChartJS.getChart(props.chartId);
  // chart.update();
  // // console.log('breakpoint', this)
  // console.log('width chart ', chart)
  // switch (breakpoint.value) {
  //   case "xxxl":
  //     chartOptionsDefaults.value.barThickness = +chart.chartArea.width;
  //     console.log('before mount', chartOptionsDefaults.value.barThickness);
  //     break;
  //   default:
  //     break;
  // }
  // chart.update();

})
</script>

<template>
  <div>
    <Bar :chartId="props.chartId" :chart-data="props.chartData" :chart-options="props.chartOptions || chartOptionsDefaults" />
  </div>
</template>
