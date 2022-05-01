<script setup>
import { ref } from "vue";
import ImageCard from "@/components/ImageCard";
import ContentToggler from "@/components/ContentToggler";

const cards = ref(
  {
    electricity: [
      {
        title: "HES",
        image: "./images/HES.png",
        url: "/",
      },
      {
        title: "MDM",
        image: "./images/MDM.png",
        url: "/",
      },
      {
        title: "Workorder",
        image: "./images/workorder.png",
        url: "/",
      },
      {
        title: "GIS",
        image: "./images/GIS.png",
        url: "/",
      },
      {
        title: "Dashboard",
        image: "./images/dashboard.png",
        url: "/dashboard",
      },
      {
        title: "Vending",
        image: "./images/vending.png",
        url: "/",
      },
      {
        title: "Assets",
        image: "./images/assets.png",
      },
      {
        title: "User&Permissions",
        image: "./images/users.png",
      },
    ],
    water: [
      {
        title: "HES",
        image: "./images/HES_water.png",
        url: "/",
      },
      {
        title: "MDM",
        image: "./images/MDM.png",
        url: "/",
      },
      {
        title: "Workorder",
        image: "./images/workorder.png",
        url: "/",
      },
      {
        title: "GIS",
        image: "./images/GIS_water.png",
        url: "/",
      },
      {
        title: "Dashboard",
        image: "./images/dashboard.png",
        url: "/dashboard",
      },
      {
        title: "Vending",
        image: "./images/vending.png",
        url: "/",
      },
      {
        title: "Assets",
        image: "./images/assets_water.png",
      },
      {
        title: "User&Permissions",
        image: "./images/users.png",
      },
    ],
  }
);

const currentContent = ref("electricity");

const contentType = ref([
  { id: "electricity", title: "Electricity", icon: "IconLightningBoltCircle", color:"yellow"},
  { id: "water", title: "Water", icon: "IconWaterCircle", color:"blue" },
]);
</script>
<template>
  <div class="page-content">
    <div class="menu-cards">
      <ContentToggler v-model="currentContent" :items="contentType" />
    </div>
    <div class="container-cards">
      <div v-for="(card, index) in cards[currentContent]" :key="index" class="card-item">
        <ImageCard :title="card.title" :image="card.image" :url="card.url" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
@import "@/assets/styles/utils.module";
</style>

<style lang="scss" scoped>
.container-cards {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  width: 100%;
}

.card-item {
  cursor: pointer;
}

.menu-cards {
  grid-area: menu;
  padding: 32px 0 24px 0;
}

.page-content {
  width: 100%;
  margin: 0 auto;
}
@media only screen and (min-width: 576px) {
  .page-content {
    width: 1188px;
  }
  .container-cards {
    justify-content: flex-start;
    gap: 24px;
    width: 100%;
  }
}
@media only screen and (min-width: 320px) {
  .card-item {
    cursor: pointer;
    max-height: 320px;
  }

}
</style>
