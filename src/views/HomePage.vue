<script setup>
// import Checkbox from "@/components/Checkbox"; 
import AdvancedFilter from "@/components/AdvancedFilter"; 
import TreeData from "@/components/TreeData"; 
import { ref } from "vue";

const treeData = ref([
  {
    name: "Israel",
    children: [
      {
        name: "DEMO",
        children: [{ name: "Fedor_Demo" }],
      },
    ],
  },
  {
    name: "DEMO",
    children: [
      {
        name: "DEMO",
        children: [{ name: "Fedor_Demo" }],
      },
    ],
  },
  {
    name: "DEMO",
    children: [
      {
        name: "DEMO",
        children: [{ name: "Fedor_Demo" }],
      },
    ],
  },
  {
    name: "DEMO",
    children: [
      {
        name: "DEMO",
        children: [{ name: "Fedor_Demo2", categories: [ "postpaid" ]}],
      },
    ],
  },
  {
    name: "DEMO",
    children: [
      {
        name: "DEMO1",
        categories: [ "prepaid" ],
        children: [{ name: "Fedor_Demo_payment" }],
      },
    ],
  },
]);

const filteredTree = ref([]);
const categories = ref([
    {
      id: "paymentType",
      name: "Payment type",
      inputType: "select",
      options: [
        {title: "Prepaid", value: "prepaid", selected: "checked"},
        {title: "Postpaid", value: "postpaid", selected: "unchecked"}
      ]
    },
    {
      id: "rateType",
      name: "Rate type",
      inputType: "select",
      options: [
        {title: "Placeholder", value: "Placeholder", selected: "checked"},
        {title: "Area", value: "Area", selected: "unchecked"}
      ]
    },
    {
      id: "connectionType",
      name: "Connection type",
      inputType: "select",
      options: [
        {title: "Wifi", value: "Wifi", selected: "checked"},
        {title: "Lan", value: "Lan", selected: "unchecked"}
      ]
    },
    {
      id: "netMetering",
      name: "Net metering",
      inputType: "input",
      value: "meter"
    },
]);

</script>
<template>
    <div>
      <div>Home</div>
      <router-link to="/Dashboard">Dashboard</router-link>
      <div>Areas</div>
      <div :class="$style.mbXS">
        <AdvancedFilter v-model="filteredTree" :data="treeData" :categories="categories"/>
      </div>
      <TreeData :items="filteredTree" />
    </div>
</template>

<style lang="scss" module>
@import "@/assets/styles/utils.module";
</style>