<script setup>
/* eslint-disable no-unused-vars */
import { ref } from "vue";
import Breadcrumbs from "@/components/Breadcrumbs";
import WidgetsBoard from "@/components/WidgetsBoard";

//Pie
const pieChartData = ref({
  type: "Pie",
  labels: ["With debt: 10%", "Prepayment: 5%", "Postpaid: 40%", "Net Metering: 30%", "Relay off: 15%"],
  datasets: [
    {
      data: [10, 5, 40, 30, 15],
      backgroundColor: [
        "#FB466C",
        "#B750BE",
        "#6C63F0",
        "#3AACFF",
        "#ED589D"
      ]
    },
  ],
});

//Gauge
const value = 56;
const gaugeChartData = ref({
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

//Bar
const barChartData = ref({
  type: "Bar",
  labels: ["NOV 12", "NOV 13", "NOV 14", "NOV 15", "NOV 16"],
  datasets: [
    {
      data: [64, 68, 77, 53, 77],
      backgroundColor: "#ffffff",
      borderRadius: "4",
      borderSkipped: false,
    },
  ],
});

const layout = ref([
  {id: "Meters", x: 0, y: 0, w: 2, h: 4, i: "Meters", template: "simpleWidget", color: "green", title: "Meters", indicators: { mainIndicator: { title: "1.3M", description: "1320000"}, secondIndicator: {title: "+17", description: "last 24 hours"}}, chart: {type: "bar", data: barChartData}},
  {id: "Dcus", x: 2, y: 0, w: 2, h: 4, i: "Dcus", template: "simpleWidget", color: "purple", title: "Dcus", indicators: { mainIndicator: { title: "200", description: "1320000"}, secondIndicator: {title: "+17", description: "last 24 hours"}}, chart: {type: "bar", data: barChartData} },
  {id: "Connected", x: 4, y: 0, w: 2, h: 4, i: "Connected", template: "simpleWidget", color: "blue", title: "Connected meters", indicators: { mainIndicator: { title: "77%", description: "1320000"}, secondIndicator: {title: "+17", description: "last 24 hours"}}, chart: {type: "bar", data: barChartData} },
  {id: "Map", x: 6, y: 0, w: 2, h: 4, i: "Map", template: "previewWidget", color: "gray", previewUrl: "images/map.jpg" , title: "", indicators: false, chart: false },
  {id: "EnergyLoss", x: 0, y: 4, w: 2, h: 4, i: "EnergyLoss", template: "simpleWidget", color: "yellow", title: "Abnormal energy loss", indicators: false, chart: {type: "gauge", data: gaugeChartData}, selector: {options: [{title: "Name12345", value: "1"}], title: "Name12345"} },
  {id: "TopPrepay", x: 2, y: 4, w: 2, h: 4, i: "TopPrepay", template: "listWidget", color: "pink", title: "Top prepay about to disconnect", indicators: false, chart: false, content: [{title: "meter 012345678"}, {title: "meter 012345678"}, {title: "meter 012345678"}, {title: "meter 012345678"}, {title: "meter 012345678"},]},
  {id: "Alerts", x: 4, y: 4, w: 4, h: 4, i: "Alerts", template: "alertsWidget", color: "red", title: "Top alerts", indicators: { mainIndicator: { title: "1.3M", description: "1320000"}, secondIndicator: {title: "+17", description: "last 24 hours"}}, chart: false, content: [{title: "Disconnected", subtitle: "7 meters"}, {title: "Cover Open", subtitle: "22 meters"}, {title: "Prepayment minimum balance", subtitle: "100 meters"}, {title: "Terminal Cover Open", subtitle: "22 meters"}] },
  {id: "PieChart", x: 0, y: 8, w: 4.5, h: 5, i: "PieChart", template: "totalChartWidget", color: "gray", title: "Total amount of meters", indicators: { mainIndicator: { title: "920110", description: "1320000"}, secondIndicator: false }, chart: {type: "pie", data: pieChartData}},
  {id: "total1", x: 4.5, y: 8, w: 3.5, h: 2.5, i: "total1", template: "totalWidget", color: "blue", title: "Total amount kWh tokens sent", indicators: { mainIndicator: { title: "77%", description: ""}, secondIndicator: {title: "+24%", description: "last 24 hours"}}, chart: false },
  {id: "total2", x: 4.5, y: 10.5, w: 3.5, h: 2.5, i: "total2", template: "totalWidget", color: "orange", title: "Total meters with low balance", indicators: { mainIndicator: { title: "24%", description: ""}, secondIndicator: {title: "+7%", description: "last 24 hours"}}, chart: false },
]);
</script>
<template>
  <div>
    <Breadcrumbs :items="$route.meta.breadcrumb" />
    <WidgetsBoard :layout="layout" />
  </div>
</template>
