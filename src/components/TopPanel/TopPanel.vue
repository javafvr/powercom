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
  hideLogo: {
    type: Boolean,
    default: false
  },
  hideDesktopMenu: {
    type: Boolean,
    default: false
  },
  hideMobileMenu: {
    type: Boolean,
    default: false
  }
});

const $style = useCssModule();
const isOpenMobileMenu = ref(false);
const classes = computed(() => ({
  [$style.menuOpened]: isOpenMobileMenu.value,
}));

</script>
<template>
  <div :class="[$style.panel, classes, $style[props.color]]">
    <div v-if="!props.hideLogo" :class="[$style.group, $style.logo]">
      <img :src="require(`${props.logoUrl}`)" alt="logo" />
    </div>
    <div v-if="$slots.customSearch" :class="[$style.group, $style.logo]">
      <slot name="customSearch"/>
    </div>
    <div v-if="!props.hideMobileMenu" :class="[$style.group, $style.burger]" @click="isOpenMobileMenu = !isOpenMobileMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <ul v-if="!props.hideMobileMenu" :class="[$style.mobileMenu]">
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
    <ul v-if="!props.hideDesktopMenu" :class="[$style.group, $style.menuDesktop]">
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
      <div v-if="!$slots.customSearch" :class="$style.topPanelGroupItem"><IconMagnify width="24" height="24" /></div>
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
