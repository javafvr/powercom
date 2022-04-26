<script setup>
import { defineProps, defineEmits, onMounted, ref } from "vue";
import { IconMagnify } from "@/components/Icon";
import BaseInput from "@/components/BaseInput";

const props = defineProps({
  data: Array,
  filterKey: String,
  modelValue: Array,
  outline: Boolean,
  block: {
    type: Boolean,
    default: false,
  },
  searchProp: {
    type: String,
    default: "name",
  },
});

let searchQuery = ref("");
const list = ref([]);

// const filterItem = (item, value) => {
//   item.filter((row) => {
//     return Object.keys(row).some((key) => {
//       return String(row[key]).toLowerCase().indexOf(value) > -1;
//     });
//   });
// }

// const filteredData = computed(() => {
//   let { data } = props;
//   let value = searchQuery.value
//   if (value) {
//     value = value.toLowerCase();
//     if (Array.isArray(data)) {
//       data.forEach((item) => {
//         console.log('item', item)
//         if (Array.isArray(item)) {
//           data = filterItem(item, value)
//         } else {
//           data = filteredData
//         }
//       })
//     }
//   }
//   return data;
// });
const checkObject = (item, value) => {
  // console.log('check', item)
  // console.log('check value', value)
  return Object.keys(item).some((key) => {
    return String(item[key]).toLowerCase().indexOf(value) > -1;
  });
}

const filteredData = (data, nodesProp, prop, value) => {
  if (value) {
    value = value.toLowerCase();
    if (Array.isArray(data)) {
      data.forEach((treeItem) => {
        if (Array.isArray(treeItem)) {
          filteredData(treeItem, nodesProp, prop, value);
        } else if (typeof treeItem === "object") {
          if(checkObject(treeItem, value)) {
            console.log('is relevant: ' , treeItem);
            list.value.push(treeItem)
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

// Searches items tree for object with specified prop with value
//
// @param {object} tree nodes tree with children items in nodesProp[] table, with one (object) or many (array of objects) roots
// @param {string} propNodes name of prop that holds child nodes array
// @param {string} prop name of searched node's prop
// @param {mixed} value value of searched node's  prop
// @returns {object/null} returns first object that match supplied arguments (prop: value) or null if no matching object was found

// const filteredData = (data, nodesProp, prop, value) => {
//   var found = null; // iterator, found node
//   if (Array.isArray(data)) { // if entry object is array objects, check each object
//     // console.log('Array', data)
//     data.forEach((item) => {
//       // console.log('founded', found)
//       found = filteredData(item, nodesProp.toLowerCase(), prop.toLowerCase(), value.toLowerCase());
//       if (found) { // if found matching object, return it.
//         return found;
//       }
//     })
//   } else if (typeof data === 'object') { // standard tree node (one root)
//     // console.log('object', data)
//     // console.log('property value ', data[prop])
//     console.log(filterItem(data[prop], value.toLowerCase()))
//     if (data[prop] !== undefined && data[prop] === value.toLowerCase()) {
//       // console.log('found!', data)
//       return data; // found matching node
//     }
//   }
//   if (data[nodesProp] !== undefined && data[nodesProp].length > 0) { // if this is not maching node, search nodes, children (if prop exist and it is not empty)
//     return filteredData(data[nodesProp], nodesProp.toLowerCase(), prop.toLowerCase(), value.toLowerCase());
//   } else {
//     return null; // node does not match and it neither have children
//   }
// }

// const filteredData = (node, childrenKey, key, value,  additionalKey = false, additionalValue = false) => {
//   let found = null;
//   if (additionalKey && additionalValue) {
//     found = node[childrenKey].find(x => x[key] === value && x[additionalKey] === additionalValue);
//   } else {
//     found = node[childrenKey].find(x => x[key] === value);
//   }
//   if (typeof(found) === 'undefined') {
//     for (const item of node[childrenKey]) {
//       if (typeof(found) === 'undefined' && item[childrenKey] && item[childrenKey].length > 0) {
//         found = filteredData(item, childrenKey, key, value, additionalKey, additionalValue);
//       }
//     }
//   }
//   return found;
// };

const emit = defineEmits(["update:modelValue"]);
const updateValue = (event) => {
  searchQuery.value = event.target.value;
  // console.log('search query', searchQuery.value)
  // console.log('tree', props.data)
  if(searchQuery.value) {
    list.value = [];
  } else {
    list.value = props.data
  }
  filteredData(props.data, "children", "name", searchQuery.value);
  emit("update:modelValue", list.value);
};

onMounted(() => {
  emit("update:modelValue", filteredData.value);
});
</script>

<template>
  <div :class="$style.search">
    <BaseInput
      v-model="searchQuery"
      @input="updateValue"
      :outline="props.outline"
      :block="props.block"
    >
      <template #append>
        <IconMagnify />
      </template>
    </BaseInput>
  </div>
</template>

<style lang="sass" module>
@import "Search.module"
</style>
