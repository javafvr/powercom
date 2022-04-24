<script setup>
import { computed, defineProps, defineEmits, onMounted, ref } from "vue";
import BaseInput from "@/components/BaseInput";
import Checkbox from "@/components/Checkbox";

const props = defineProps({
  data: Array,
  filterKey: String,
  modelValue: Array,
  outline: Boolean,
  options: Array,
  isMultiple: Boolean,
});

let searchQuery = ref("");

const filteredData = computed(() => {
  let { data, filterKey } = props;
  filterKey = searchQuery.value;
  if (filterKey) {
    filterKey = filterKey.toLowerCase();
    data = data.filter((row) => {
      return Object.keys(row).some((key) => {
        return String(row[key]).toLowerCase().indexOf(filterKey) > -1;
      });
    });
  }
  return data;
});

const emit = defineEmits(["update:modelValue"]);

const isOpenSelect = ref(false);

const updateValue = (event) => {
  searchQuery.value = event.target.value;
  emit("update:modelValue", filteredData.value);
};
const openSelect = () => {
  isOpenSelect.value = true;
}
const closeSelect = () => {
  isOpenSelect.value = false;
}

onMounted(() => {
  emit("update:modelValue", filteredData.value);
});
</script>

<template>
  <div
    @focus="!isDisabled && openSelect()"
    @blur="closeSelect"
    tabindex="0"
    :class="$style.select"
  >
    <BaseInput
      v-model="searchQuery"
      @input="updateValue"
      :outline="props.outline"
    >
      <template #append>
        <IconArrowDropDown />
      </template>
    </BaseInput>
    <div v-if="isOpenSelect" :class="$style.selectList">
      <ul :class="$style.list">
        <li :class="$style.listItem" v-for="option in props.options" :key="option.value">
          <Checkbox v-if="props.isMultiple" v-model="option.selected" :label="option.title"/>
          <div v-else>{{ option.title }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="sass" module>
@import "Select.module"
</style>
