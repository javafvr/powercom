<script setup>
import {
  IconMagnify,
  IconNotifications,
  IconSettings,
  IconDetails,
} from "../Icon";
import { defineProps, useCssModule, computed, ref } from "vue";

const props = defineProps({
  menuItems: Array,
  user: Object,
  logoUrl: {
    type: String,
    default: "./images/logo.svg"
  },
  color: {
    type: String,
    default: "",
    validator: function (value) {
      return ["", "purple"].indexOf(value) !== -1;
    },
  },
});

const $style = useCssModule();
const isOpenMobileMenu = ref(false);
const classes = computed(() => ({
  [$style.menuOpened]: isOpenMobileMenu.value,
}));

</script>
<template>
  <div :class="[$style.panel, classes, $style[props.color]]">
    <div :class="[$style.group, $style.logo]">
      <img :src="require(`${props.logoUrl}`)" alt="logo" />
    </div>
    <div :class="[$style.group, $style.burger]" @click="isOpenMobileMenu = !isOpenMobileMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>
      <ul :class="[$style.mobileMenu]">
        <li
          v-for="(item, index) in props.menuItems"
          :key="index"
          :class="$style.menuItem"
        >
          <router-link :to="item.url" v-slot="{ isExactActive }">
            <div :class="[$style.link, isExactActive && $style.active]" >{{ item.title }}</div>
          </router-link>
        </li>
      </ul>
    <ul :class="[$style.group, $style.menuDesktop]">
      <li
        v-for="(item, index) in props.menuItems"
        :key="index"
        :class="$style.topPanelGroupItem"
      >
        <router-link :to="item.url" v-slot="{ isExactActive }">
          <div :class="[$style.link, isExactActive && $style.active]" >{{ item.title }}</div>
        </router-link>
      </li>
      <li :class="$style.topPanelGroupItem">
        <IconDetails />
      </li>
    </ul>
    <div :class="[$style.group, $style.topPanelActions]">
      <div :class="$style.topPanelGroupItem"><IconMagnify width="24" height="24" /></div>
      <div :class="$style.topPanelGroupItem"><IconNotifications /></div>
      <div :class="$style.topPanelGroupItem"><IconSettings /></div>
      <div :class="[$style.topPanelGroupItem, $style.topPanelAvatar]">
        <div :class="$style.topPanelAvatarOverflow">
          <img :src="user.image" :alt="user.title" />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" module>
@import "TopPanel.module";
</style>
