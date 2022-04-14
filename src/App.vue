<script setup>
import TopPanel from "./components/TopPanel";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import TreeData from "./components/TreeData";
import { ref } from "vue";
const menuItems = [
  { url: "/", title: "Components" },
  { url: "/", title: "Multi Rates" },
  { url: "/Login", title: "Data Reading" },
  { url: "/Dashboard", title: "VEE" },
  { url: "/Dashboard", title: "Commands" },
  { url: "/Login", title: "Analytics" },
  { url: "/Login", title: "Management" },
  { url: "/Dashboard", title: "Settings" },
];
const currentUser = {
  url: "/",
  title: "John Doe",
  image: require("./components/TopPanel/images/user1.jpg"),
};
const isSidebarOpened = ref(true);
const onCloseClickHandler = (event) => {
  isSidebarOpened.value = event;
};
const treeData = ref([
  {
    name: 'Israel',
    children: [
      {
        name: 'DEMO',
        children: [{ name: 'Fedor_Demo' }]
      },
    ]
  },
  {
    name: 'DEMO',
    children: [
      {
        name: 'DEMO',
        children: [{ name: 'Fedor_Demo' }]
      },
    ]
  },
  {
    name: 'DEMO',
    children: [
      {
        name: 'DEMO',
        children: [{ name: 'Fedor_Demo' }]
      },
    ]
  },
  {
    name: 'DEMO',
    children: [
      {
        name: 'DEMO',
        children: [{ name: 'Fedor_Demo' }]
      },
    ]
  },
  {
    name: 'DEMO',
    children: [
      {
        name: 'DEMO',
        children: [{ name: 'Fedor_Demo' }]
      },
    ]
  }
])
</script>
<template>
  <div>
    <div id="nav">
      <TopPanel :menuItems="menuItems" :user="currentUser" />
    </div>
    <Sidebar @side-menu:state="onCloseClickHandler($event)">
      <TreeData :items="treeData"/>
    </Sidebar>
    <MainContent :isSidebarOpened="isSidebarOpened">
      <router-view></router-view>
    </MainContent>
  </div>
</template>
