<script setup>
import TopPanel from "@/components/TopPanel";
import MainContent from "@/components/MainContent";
import LatestActivities from "@/components/LatestActivities";
import SideMenu from "@/components/SideMenu";
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

const sidebarMenu = ref([
  {
    id: 0,
    title: "Alerts/Events",
    url: "/",
    children: [
      {
        id: 1,
        title: "Alerts",
        url: "/",
      },
      {
        id: 2,
        title: "Alerts Settings",
        url: "/",
      },
      {
        id: 3,
        title: "Notification",
        url: "/",
      },
      {
        id: 4,
        title: "Pairing",
        url: "/",
      },
    ],
  },
  {
    id: 5,
    title: "VEE",
    url: "/",
    children: [
      {
        id: 6,
        title: "Alerts",
        url: "/",
      },
      {
        id: 7,
        title: "Alerts Settings",
        url: "/",
      },
      {
        id: 8,
        title: "Notification",
        url: "/",
      },
      {
        id: 9,
        title: "Pairing",
        url: "/",
      },
    ],
  },
  {
    id: 10,
    title: "Notification Time",
    url: "/",
  },
]);
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
  <div class="container">
    <nav>
      <TopPanel
        :menuItems="menuItems"
        :user="currentUser"
        color="purple"
        logoUrl="./images/logo-white.svg"
      />
    </nav>
    <sidebar>
      <SideMenu :items="sidebarMenu" />
    </sidebar>
    <main>
      <MainContent :isStaticSideMenu="true">
        <router-view></router-view>
      </MainContent>
    </main>
    <aside>
      <LatestActivities :items="latestActivities" />
    </aside>
  </div>
</template>
<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 64px 0.5fr 3.5fr 2fr;
  grid-template-areas: "nav" "sidebar" "main" "aside";
  grid-gap: 0px;
}

sidebar {
  grid-area: sidebar;
}
aside {
  grid-area: aside;
  padding: 20px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
nav {
  grid-area: nav;
}
main {
  grid-area: main;
}

@media only screen and (min-width: 576px) {
  .container {
    height: 100vh;
    grid-template-columns: 0.95fr 2.9fr 0.75fr;
    grid-template-rows: 64px 1.5fr;
    grid-template-areas: "nav nav nav" "sidebar main aside";
    grid-gap: 0 24px;
  }
  aside {
    padding: 80px 0 0 0;
  }
}
@media only screen and (min-width: 1200px) {
  .container {
    grid-template-rows: 96px 1.5fr;
  }
}
</style>
<style lang="sass" module>
@import "@/assets/styles/utils.module"
</style>
