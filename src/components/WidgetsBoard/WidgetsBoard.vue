<script setup>
/* eslint-disable vue/no-v-for-template-key-on-child */
import { defineProps, ref, onMounted } from "vue";
import { SmartWidgetGrid } from "vue-smart-widget";
import { WidgetCard } from "@/components/WidgetCard";
import { Button } from "@/components/Button";
import { Modal } from "@/components/Modal";
import { ContextMenu } from "@/components/ContextMenu";
import Search from "@/components/Search";
import {
  IconModeEdit,
  IconCheckCircle,
  IconPageView,
  IconContentAdd,
} from "@/components/Icon";

const props = defineProps({
  layout: {
    type: Array,
    required: true,
  },
});
const isEditMode = ref(false);
const isShowAddNew = ref(false);
const items = ref([]);

const onClickEditHandler = () => {
  isEditMode.value = !isEditMode.value;
  console.log('refs', ContextMenu)
};

const onWidgetCloseHandler = (item) => {
  if (isEditMode.value) {
    items.value = items.value.filter((value) => value !== item);
  }
};
const addWidgetHandler = (item) => {
  items.value.push(item);
};

const filteredData = ref([]);

// lifecycle hooks
onMounted(() => {
  items.value = props.layout;
});

// const onClickContextHandler = () => {
//   isEditMode.value = !isEditMode.value;
//   console.log('refs', ContextMenu)
// };
</script>

<template>
  <div :class="$style.widgetsBoard">
    <div :class="$style.gridHeader">
      <div :class="$style.mbL">
        <h4 :class="[$style.title4, $style.mbXSS]">Recently Used</h4>
        <Button title="Inventory" color="purple" size="M" outline></Button>
        <Button title="Workorder" color="purple" size="M" outline></Button>
        <Button title="Assets" color="purple" size="M" outline></Button>
        <Button title="Commands" color="purple" size="M" outline></Button>
        <Button
          title="Command Results"
          color="purple"
          size="M"
          outline
        ></Button>
        <Button title="Alerts/Vee" color="purple" size="M" outline></Button>
      </div>
      <div :class="[$style.mbXSS, $style.flex]">
        <h4 :class="[$style.title4]">Current Area: <span @contextmenu.prevent="$refs.menu.open">Fedor_Demo</span></h4>
        <ContextMenu ref="menu">
          dcdfdfdsfds
        </ContextMenu>
        <IconArrowDropDown height="12" width="12" />
      </div>
      <div :class="[$style.flex, $style.justifyBetween]">
        <Button title="View details" color="purple" size="M">
          <template #prepend>
            <IconPageView />
          </template>
          <template #append>
            <IconChevronRight width="16" height="16" />
          </template>
        </Button>
        <Button
          :title="isEditMode ? 'Apply' : 'Edit'"
          :color="isEditMode ? 'green' : 'purple'"
          @click="onClickEditHandler"
          size="M"
        >
          <template #prepend>
            <IconCheckCircle v-if="isEditMode" />
            <IconModeEdit v-else />
          </template>
        </Button>
      </div>
      <div v-if="isEditMode" :class="$style.mtS">
        <Button
          title="Add New"
          color="purple"
          size="L"
          @click="isShowAddNew = true"
          solid
        >
          <template #prepend>
            <IconContentAdd />
          </template>
        </Button>
      </div>
    </div>
    <div :class="$style.gridWrapper">
      <smart-widget-grid
        :layout="items"
        :isStatic="!isEditMode"
        responsive
        resizable
        :margin="[24, 24]"
        :cols="{ lg: 10, md: 10, sm: 8, xs: 4, xxs: 2 }"
        :rowHeight="41"
      >
        <template v-for="item in items" v-slot:[item.i]>
          <WidgetCard
            :key="item.i"
            :title="item.i"
            :color="item.color"
            :isEditMode="isEditMode"
            :isCharts="true"
            @widget:close="onWidgetCloseHandler(item)"
          />
        </template>
      </smart-widget-grid>
    </div>
    <Teleport to="body">
      <!-- use the modal component, pass in the prop -->
      <Modal
        :isShowModal="isShowAddNew"
        @close="isShowAddNew = false"
        isClosable
      >
        <template #header>
          <h3 :class="[$style.title3, $style.mbXS]">Add New</h3>
          <div :class="[$style.mbS, $style.controls]">
            <Search
              v-model="filteredData"
              :data="props.layout"
              outline
            ></Search>
          </div>
        </template>
        <template #body>
          <div v-if="filteredData.length" :class="$style.previewGrid">
            <div
              v-for="item in filteredData"
              :key="item.id"
              :class="$style.previewGridItem"
            >
              <WidgetCard
                :key="item.id"
                :title="item.id"
                :color="item.color"
                :isPreviewMode="true"
                :previewUrl="item.previewUrl"
                @widget:close="onWidgetCloseHandler(item)"
              />
              <div :class="$style.previewGridItemOverlay"></div>
              <span :class="$style.previewAddButton">
                <Button
                  title="Add"
                  @click="addWidgetHandler(item)"
                  size="L"
                  color="purple"
                  solid
                  shadow
                />
              </span>
            </div>
          </div>
          <p v-else>No matches found.</p>
        </template>
      </Modal>
    </Teleport>
  </div>
</template>

<style lang="scss" module>
@import "WidgetsBoard.module";
@import "@/assets/styles/utils.module";
</style>
