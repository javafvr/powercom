<script setup>
import { defineProps, ref, computed } from "vue";
import ContextMenu from "@/components/ContextMenu";

const props = defineProps(["items"]);
const divider = "/";

const genBreadcrumbs = computed(() => {
  const result = [];
  for (let i = 0; i < props.items.length; i++) {
    const item = props.items[i];
    if (i && item !== props.items[props.items.length]) {
      result.push({ text: divider });
    }
    result.push(item);
  }
  return result;
});

const breadcrumbs = ref(genBreadcrumbs);
</script>

<template>
  <div :class="$style.breadcrumbs">
    <ul :class="$style.list">
      <li
        v-for="(item, index) in breadcrumbs"
        :key="index"
        :class="[
          $style.item,
          { [$style.itemLink]: item.link },
        ]"
      >
        <span v-if="!item.link" :class="$style.context">{{ item.text }}</span>
        <span v-else>
          <router-link :to="item.link">{{ item.text }}</router-link>
        </span>
      </li>
      <li :class="$style.contextIcon">
        <ContextMenu>
          <template #activator>
            <IconArrowDropDown width="12" height="12" />
          </template>
          <template #content>
            <ul :class="$style.contextList">
              <li :class="$style.contextListItem">
                <router-link :class="$style.itemLink" to="/">Home</router-link>
              </li>
              <li :class="$style.contextListItem">
                <router-link :class="$style.itemLink" to="/">Home</router-link>
              </li>
              <li :class="$style.contextListItem">
                <router-link :class="$style.itemLink" to="/">Home</router-link>
              </li>
            </ul>
          </template>
        </ContextMenu>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" module>
@import "Breadcrumbs.module";
</style>
