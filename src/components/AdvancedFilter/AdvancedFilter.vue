<script setup>
import BaseInput from "@/components/BaseInput";
import Select from "@/components/Select";
import Search from "@/components/Search";

import { defineProps, computed, ref, defineEmits, onMounted, onBeforeMount, watch } from "vue";

const props = defineProps({
  modelValue: {
    type: Array,
    default: () => [],
  },
  data: {
    type: Array,
    default: () => [],
  },
  categories: {
    type: Array,
    default: () => [],
  },
  defaultAdvanced: {
    type: Boolean,
    default: false
  }
});

let filteredTree = ref([]);
let filteredTreeTmp = ref([]);
let isAdvancedFilter = ref(true);

// const filteredData = computed(() => {
//   let { data, filterKey } = props;
//   filterKey = searchQuery.value
//   if (filterKey) {
//     filterKey = filterKey.toLowerCase();
//     data = data.filter((row) => {
//       return Object.keys(row).some((key) => {
//         return String(row[key]).toLowerCase().indexOf(filterKey) > -1;
//       });
//     });
//   }
//   return data;
// });

const selectedCategories = ref([]);
const classes = computed(() => ({
}));

const emit = defineEmits(["update:modelValue"]);

const updateValue = () => {
  console.log('update model')
  emit("update:modelValue", filteredTree.value);
};

const checkObject = (item, value) => {
  if(item.categories) {
    return item.categories.some(element => value.includes(element))
  }
  return false
}

const filteredData = (data, nodesProp, prop, value) => {
  if (value) {
    if (Array.isArray(data)) {
      data.forEach((treeItem) => {
        if (Array.isArray(treeItem)) {
          filteredData(treeItem, nodesProp, prop, value);
        } else if (typeof treeItem === "object") {
          if(checkObject(treeItem, value)) {
            console.log('is relevant: ' , treeItem);
            filteredTreeTmp.value.push(treeItem)
          }
          if (treeItem[nodesProp] !== undefined) {
            filteredData(treeItem, nodesProp, prop, value);
            if (Array.isArray(treeItem[nodesProp])) {
              filteredData(treeItem[nodesProp], nodesProp, prop, value);
            }
          }
        }
      });
    }
  }
  return data;
};

const categoryFilter = () => {
  const filters = Object.keys(selectedCategories.value);
  const categories = filters.map(filterName => { 
    const filterValues = selectedCategories.value[filterName];
    if(Array.isArray(filterValues)) {
      return filterValues.map(value => {
        return value.value;
      })
    }
    return filterValues
  }).flat()
  // console.log(categories)
  filteredTreeTmp.value = [];
  filteredData(filteredTree.value, 'children', 'categories', categories)
};

watch(selectedCategories, () => {
  filteredTree.value = props.data
  categoryFilter();
  emit("update:modelValue", filteredTree.value);
}, { deep: true });

onBeforeMount(() => {
  selectedCategories.value = props.categories.reduce((obj, cur) => (
    {...obj, [cur.id]: cur.inputType === 'select' ? [] : cur.value}
  ), {})
})
onMounted(() => {
  isAdvancedFilter.value = props.defaultAdvanced
  filteredTree.value = props.data
  emit("update:modelValue", filteredTree.value);
});
</script>

<template>
  <div :class="[$style.advancedFilter, classes]">
    <div :class="$style.header">
      <Search
        outline
        v-model="filteredTree"
        :data="props.data"
        @update:modelValue="updateValue"
      />
    </div>

    <div v-show="isAdvancedFilter" :class="$style.itemsContainer">
      <div v-for="category in props.categories" :key="category.id" :class="$style.item">
        <Select
          v-if="category.inputType === 'select'"
          :placeholder="category.name"
          :options="category.options"
          v-model="selectedCategories[category.id]"
          outline
          isMultiple
          size="XS"
          block
          round
        />
        <BaseInput v-if="category.inputType === 'input'" v-model="selectedCategories[category.id]" outline :placeholder="category.name" size="XS" round block />
      </div>
    </div>
    <div
      :class="$style.advancedFilterLink"
      @click="isAdvancedFilter = !isAdvancedFilter"
    >
      Advanced search
    </div>
    <!-- <div> -->
      <!-- <pre> -->
        <!-- {{filteredTreeTmp}} -->
      <!-- </pre> -->
    <!-- </div> -->
  </div>
</template>

<style lang="scss" module>
@import "AdvancedFilter.module.scss";
</style>
