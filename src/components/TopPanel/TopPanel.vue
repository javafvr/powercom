<script setup>
import {
  IconMagnify,
  IconNotifications,
  IconSettings,
  IconDetails,
} from "../Icon";
import { defineProps } from "vue";

const props = defineProps({
  menuItems: Array,
  user: Object,
});
</script>
<template>
  <div :class="$style.topPanel">
    <div :class="[$style.topPanelGroup, $style.topPanelGroupLogo]">
      <img :src="require('./images/logo.svg')" alt="logo" />
    </div>
    <div :class="$style.topPanelGroup">
      <div
        v-for="(item, index) in props.menuItems"
        :key="index"
        :class="$style.topPanelGroupItem"
      >
        <router-link :to="item.url">{{ item.title }}</router-link>
      </div>
      <div :class="$style.topPanelGroupItem">
        <IconDetails />
      </div>
    </div>
    <div :class="[$style.topPanelGroup, $style.topPanelActions]">
      <div :class="$style.topPanelGroupItem"><IconMagnify /></div>
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
