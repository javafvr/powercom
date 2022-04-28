<script setup>
import TopPanel from "@/components/TopPanel";
import { SidebarSlider } from "@/components/SidebarSlider";
import MainContent from "@/components/MainContent";
import TreeData from "@/components/TreeData";
import AdvancedFilter from "@/components/AdvancedFilter";
import LatestActivities from "@/components/LatestActivities";
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
  console.log(event)
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
  <div :class="['container', { 'sidebar-opened': isSidebarOpened }]">
    <nav>
      <TopPanel :menuItems="menuItems" :user="currentUser" />
    </nav>
    <aside class="menu">
      <SidebarSlider @side-menu:state="onCloseClickHandler($event)">
        <div :class="$style.w100" v-show="isSidebarOpened">
          <h4 :class="[$style.title4, $style.mbXS]">Areas</h4>
          <div :class="[$style.mbXS]">
            <AdvancedFilter v-model="filteredTree" :data="treeData" :categories="categories"/>
          </div>
          <TreeData :items="filteredTree" />
        </div>
      </SidebarSlider>
    </aside>
    <main>
      <MainContent>
        <router-view></router-view>
      </MainContent>
    </main>
    <aside>
      <LatestActivities :items="latestActivities" />
    </aside>
    <footer></footer>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/styles/index";
.container {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 0.1fr 0.5fr auto 1fr;
  grid-template-areas: "nav" "sidemenu" "main" "aside";
  grid-gap: 0px;
}

aside.menu {
  grid-area: sidemenu;
  width: 100%;
  padding-top: 40px;
  transition: all $main-transition;
}
aside {
  grid-area: aside;
  padding: 20px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 100%;
}
nav {
  grid-area: nav;
}
main {
  padding: 10px;
  grid-area: main;
}

@media only screen and (min-width: 576px) {
  .container {
    height: 100vh;
    grid-template-columns: auto 2fr 0.6fr;
    grid-template-rows: 0.2fr 1.5fr 56px;
    grid-template-areas: "nav nav nav" "sidemenu main aside" "footer footer footer";
    grid-gap: 0 24px;
  }
  .container.sidebar-opened {
    aside.menu {
      width: 285px;
    }
  }
  aside {
    padding: 80px 0 0 0;
  }
  aside.menu {
    width: 48px;
  }
  main {
    padding: 0;
  }
  footer {

  }
}
</style>
<style lang="sass" module>
@import "@/assets/styles/utils.module"
</style>
