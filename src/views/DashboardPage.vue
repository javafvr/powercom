<script setup>
import { ref } from "vue";
import Breadcrumbs from "@/components/Breadcrumbs";
import WidgetsBoard from "@/components/WidgetsBoard";
const layout = ref([
  { x: 0, y: 0, w: 2, h: 4, i: "Meters", color: "green" },
  { x: 2, y: 0, w: 2, h: 4, i: "Dcus", color: "purple" },
  { x: 4, y: 0, w: 2, h: 4, i: "Connected", color: "blue" },
  { x: 6, y: 0, w: 2, h: 4, i: "Map", color: "yellow" },
  { x: 8, y: 0, w: 2, h: 4, i: "Alerts", color: "red" },
  { x: 0, y: 4, w: 5, h: 4, i: "Meters2", color: "green" },
  { x: 5, y: 6, w: 4, h: 2, i: "Connected2", color: "blue" },
  { x: 5, y: 4, w: 4, h: 2, i: "Map2", color: "yellow" },
  { x: 9, y: 4, w: 1, h: 4, i: "Dcus2", color: "purple" },
]);
</script>
<template>
  <div>
    <Breadcrumbs :items="$route.meta.breadcrumb" />
    <WidgetsBoard :layout="layout" />
  </div>
</template>
