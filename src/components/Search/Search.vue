<script setup>
import { computed, defineProps, defineEmits, onMounted, ref } from "vue";
import { IconMagnify } from "@/components/Icon";
import BaseInput from "@/components/BaseInput";

const props = defineProps({
  data: Array,
  filterKey: String,
  modelValue: Array,
  outline: Boolean
});

let searchQuery = ref("");

const filteredData = computed(() => {
  let { data, filterKey } = props;
  filterKey = searchQuery.value
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
const updateValue = (event) => {
  searchQuery.value = event.target.value
  emit("update:modelValue", filteredData.value);
};

onMounted(() => {
  emit("update:modelValue", filteredData.value);
})
</script>

<template>
  <div>
    <BaseInput v-model="searchQuery" @input="updateValue" :outline="props.outline">
      <template #append>
        <IconMagnify />
      </template>
    </BaseInput>
  </div>
</template>

<style lang="sass" module>
@import "Search.module"
</style>
