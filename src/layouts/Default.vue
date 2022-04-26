<script setup>
import TopPanel from "@/components/TopPanel";
import Sidebar from "@/components/Sidebar";
import MainContent from "@/components/MainContent";
import TreeData from "@/components/TreeData";
import LatestActivities from "@/components/LatestActivities";
import Search from "@/components/Search";
import { ref } from "vue";
const menuItems = [
  { url: "/", title: "Components" },
  { url: "/", title: "Multi Rates" },
  { url: "/Login", title: "Data Reading" },
  { url: "/Vee", title: "VEE" },
  { url: "/Dashboard", title: "Commands" },
  { url: "/Login", title: "Analytics" },
  { url: "/Login", title: "Management" },
  { url: "/Dashboard", title: "Settings" },
];
const currentUser = {
  url: "/",
  title: "John Doe",
  image: require("@/components/TopPanel/images/user1.jpg"),
};
const isSidebarOpened = ref(true);
const onCloseClickHandler = (event) => {
  isSidebarOpened.value = event;
};
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
]);

const filteredTree = ref([]);
const latestActivities = ref([
  {
    title: "Commands",
    icon: "IconCommand",
    items: [
      {
        title: "meter 012345678",
        subtitle: "10:03 16/03/2022",
        status: "Relay off",
      },
      {
        title: "Dcu 0123456789",
        subtitle: "10:00 16/03/2022",
        status: "Link meters",
      },
    ],
  },
  {
    title: "Reports",
    icon: "IconDocument",
    items: [
      {
        title: "Electricity sum meters...",
        subtitle: "10:03 16/03/2022",
        status: "",
      },
      { title: "Active dcus...", subtitle: "10:00 16/03/2022", status: "" },
    ],
  },
  {
    title: "Process",
    icon: "IconWorkflow",
    items: [
      { title: "Dcu detect", subtitle: "10:03 16/03/2022", status: "" },
      { title: "Firmeare upgrade", subtitle: "10:00 16/03/2022", status: "" },
    ],
  },
  {
    title: "Work-order",
    icon: "IconClipboard",
    items: [
      { title: "Workorder 1", subtitle: "10:03 16/03/2022", status: "" },
      { title: "Workorder 2", subtitle: "10:00 16/03/2022", status: "" },
    ],
  },
]);
</script>
<template>
  <div clsaa="container">
    <div id="nav">
      <TopPanel :menuItems="menuItems" :user="currentUser" />
    </div>
    <div class="container">
      <Sidebar @side-menu:state="onCloseClickHandler($event)">
        <h4 :class="[$style.title4]">Areas</h4>
        <Search v-model="filteredTree" :data="treeData" outline/>
        <TreeData :items="filteredTree" />
      </Sidebar>
      <main>
        <MainContent :isSidebarOpened="isSidebarOpened">
          <router-view></router-view>
        </MainContent>
      </main>
      <aside>
        <LatestActivities :items="latestActivities" />
      </aside>
    </div>
  </div>
</template>
<style lang="scss">
.container {
  display: grid;
  grid-template-columns: 1fr minmax(150px, 20%);
}

aside {
  padding: 80px 24px 0 24px;
}
</style>
<style lang="sass" module>
@import "@/assets/styles/utils.module"
</style>