<script setup>
import { ref, computed, useCssModule, defineProps } from "vue";
import Collapsible from "@/components/Collapsible";
const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  }
});
const $style = useCssModule();
const isActive = ref(true);

const classes = computed(() => ({
  [$style.sidebarActive]: isActive.value,
}));
</script>

<template>
  <div :class="[$style.sideMenu, classes]">
    <div
      v-for="item in props.items"
      :key="item.id"
      :class="[$style.block, classes]"
    >
      <Collapsible v-if="item.children" onHover>
        <template #trigger>
          <div :class="$style.header">
            {{ item.title }}
          </div>
        </template>
          <ul :class="$style.list">
            <li
              v-for="child in item.children"
              :key="child.id"
              :class="$style.listItem"
            >
              <router-link :to="child.url">{{ child.title }}</router-link>
            </li>
          </ul>
      </Collapsible>
      <div v-else :class="$style.header">{{ item.title }}</div>
    </div>
  </div>
</template>

<style lang="scss" module>
@import "SideMenu.module";
</style>
