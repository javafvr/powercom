<script setup>
import { defineProps } from "vue";
import { generateChart } from "vue-chartjs";
import { DoughnutController } from "chart.js";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from "chart.js";
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

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
  height: Number,
});

class RadialGaugeController extends DoughnutController {
  drawArc(numArc) {
    const ctx = this.chart.ctx;
    const vm = this.getMeta().data[numArc];
    const { startAngle, endAngle } = vm;

    const cornerRadius = (vm.outerRadius - vm.innerRadius) / 2;
    const cornerX = (vm.outerRadius + vm.innerRadius) / 2;

    // translate + rotate to make drawing the corners simpler
    ctx.translate(vm.x, vm.y);
    ctx.rotate(startAngle);
    const angle = endAngle - startAngle;
    ctx.beginPath();

    //Rounded corners
    ctx.arc(cornerX, 0, cornerRadius, Math.PI, 0);

    ctx.arc(0, 0, vm.outerRadius, 0, angle);

    const x = cornerX * Math.cos(angle);
    const y = cornerX * Math.sin(angle);

    //Rounded corners
    ctx.arc(x, y, cornerRadius, angle, angle + Math.PI);

    ctx.arc(0, 0, vm.innerRadius, angle, 0, true);
    ctx.closePath();
    ctx.rotate(-startAngle);
    ctx.translate(-vm.x, -vm.y);

    ctx.strokeStyle = vm.options.borderColor;
    ctx.lineWidth = vm.options.borderWidth;
    ctx.fillStyle = vm.options.backgroundColor;

    ctx.fill();
    ctx.lineJoin = "bevel";

    if (vm.options.borderWidth) {
      ctx.stroke();
    }
  }
  drawTrack() {
    const ctx = this.chart.ctx;
    const vm = this.getMeta().data[0];
    const startAngle = -1.5707963267948966;
    const endAngle = 4.71238898038469;
    const cornerRadius = (vm.outerRadius - vm.innerRadius) / 2;
    const cornerX = (vm.outerRadius + vm.innerRadius) / 2;
    ctx.globalAlpha = 0.5;

    // translate + rotate to make drawing the corners simpler
    ctx.translate(vm.x, vm.y);
    ctx.rotate(startAngle);
    const angle = endAngle - startAngle;
    ctx.beginPath();

    //Rounded corners
    ctx.arc(cornerX, 0, cornerRadius, Math.PI, 0);

    ctx.arc(0, 0, vm.outerRadius, 0, angle);

    const x = cornerX * Math.cos(angle);
    const y = cornerX * Math.sin(angle);

    //Rounded corners
    ctx.arc(x, y, cornerRadius, angle, angle + Math.PI);

    ctx.arc(0, 0, vm.innerRadius, angle, 0, true);
    ctx.closePath();
    ctx.rotate(-startAngle);
    ctx.translate(-vm.x, -vm.y);

    ctx.strokeStyle = "#E4E4E4";
    ctx.lineWidth = vm.options.borderWidth;
    ctx.fillStyle = "#E4E4E4";

    ctx.fill();
    ctx.lineJoin = "bevel";

    if (vm.options.borderWidth) {
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
  }

  drawCenterText() {
    const ctx = this.chart.ctx;
    const meta = this.getMeta();
    const arc = meta.data[0];
    const value = arc.$context.raw;
    let fontSize = 12;
    if (typeof fontSize === "number") {
      fontSize = `${fontSize}px`;
    }
    const color = "#ffffff";
    let text =
      typeof meta._dataset.text === "function"
        ? meta._dataset.text()
        : meta._dataset.text;
    text = text || `${value}%`;
    ctx.font = "bold 24px IBM Plex Sans";
    ctx.fillStyle = color;
    ctx.textBaseline = "middle";
    let textWidth = ctx.measureText(text).width;
    let textX = Math.round(arc.x - textWidth / 2);
    if (textWidth < 2 * this.innerRadius * 0.8) {
      ctx.fillText(`${text}`, textX, arc.y);
    }
  }

  draw() {
    this.drawTrack();
    this.drawArc(0);
    this.drawCenterText();
  }
}

const chartOptionsDefaults = {
  type: "radialGauge",
  cutout: '81%', // precent 63
  rotation: 0,
  borderJoinStyle: "round",
  borderWidth: false,
  backgroundColor: "#E4E4E4",
  responsive: true,
  maintainAspectRatio: false,
  font: {
    fontColor: "ffffff",
  },
  fontColor: "ffffff",

  animation: {
    animateRotate: true,
  },
  elements: {
    arc: {
      cutout: 20, // precent
      borderWidth: 0,
      fontColor: "#ffffff",
      roundedCornersFor: 0,
    },
  },
  labels: ["Red", "Blue", "Yellow"],
  plugins: {
    datalabels: {
      display: false
    },
    legend: {
      display: false,
    },
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
      caretSize: 6,
    },
  },
};

RadialGaugeController.id = "radialGauge";
RadialGaugeController.defaults = DoughnutController.defaults;
// RadialGaugeController.defaults.style.hight = '16px';

const RadialGauge = generateChart(
  props.chartId,
  "radialGauge",
  RadialGaugeController
);
</script>

<script>
export default {
  inheritAttrs: false,
};
</script>

<template>
  <RadialGauge
    :chartId="props.chartId"
    :chart-data="props.chartData"
    :chart-options="props.chartOptions || chartOptionsDefaults"
    :styles="{ position: 'relative', 'height': props.height + 'px', 'max-height': '100%' }"
  />
</template>
