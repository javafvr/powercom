<script setup>
import { computed, defineProps, defineEmits, onMounted, ref } from "vue";
import BaseInput from "@/components/BaseInput";
import Checkbox from "@/components/Checkbox";

const props = defineProps({
  data: Array,
  filterKey: String,
  modelValue: {
    type: Array,
    default: () => []
  },
  outline: Boolean,
  options: {
    type: Array,
    default: () => []
  },
  placeholder: {
    type: String,
    default: ""
  },
  block: {
    type: Boolean,
    default: false,
  },
  isMultiple: Boolean,
  size: {
    type: String,
    default: "S",
    validator: function (value) {
      return ["XS", "S", "M", "L", "XL"].indexOf(value) !== -1;
    },
  },
  round: {
    type: Boolean,
    default: false,
  },
  optionValue: {
    type: String,
    default: 'id'
  },
});

const defaultSelectedOptions = computed(() => {
  return props.options.filter(item => item.selected === 'checked');
});

const emit = defineEmits(["update:modelValue", "update:changeSelectedValues"]);
const isOpenSelect = ref(false);
const selectedOptions = ref([]);
const inputValue = ref("");

// Methods
const openSelect = () => {
  isOpenSelect.value = true;
};
const closeSelect = () => {
  isOpenSelect.value = false;
};
const updateModel = (option) => {
  if (selectedOptions.value.includes(option)) {
    selectedOptions.value = selectedOptions.value.filter((item)=>{
      if (item.value !== option.value) {
        return item;
      }

    });
  } else {
    selectedOptions.value.push(option);
  }
  emit("update:modelValue", selectedOptions.value);
};

onMounted(() => {
  selectedOptions.value = defaultSelectedOptions.value;
  emit("update:modelValue", selectedOptions.value);
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
      v-model="inputValue"
      @focus="openSelect"
      @blur="closeSelect"
      :outline="props.outline"
      :size="props.size"
      :placeholder="props.placeholder"
      :round="props.round"
      :block="props.block"
    >
      <template #append>
        <IconArrowDropDown width="16" height="16" />
      </template>
    </BaseInput>
    <div v-show="isOpenSelect" :class="$style.selectList">
      <ul :class="$style.list">
        <li
          :class="$style.listItem"
          v-for="option in props.options"
          :key="option.value"
          @click="updateModel(option)"
        >
          <Checkbox
            v-if="props.isMultiple"
            v-model="option.selected"
            :label="option.title"
          />
          <div v-else>{{ option.title }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="sass" module>
@import "Select.module"
</style>
