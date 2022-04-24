<script setup>
import Checkbox from "@/components/Checkbox"; 
import Select from "@/components/Select"; 
import { ref } from "vue";

const model = ref("unchecked");
const selectPaymentOptions = ref([{title: "Prepaid", value: "Prepaid", selected: false}, {title: "Postpaid", value: "Postpaid", selected: false}]);
const selectPayment = ref("");
</script>
<template>
    <div>
    <div>Home</div>
    <router-link to="/Dashboard">Dashboard</router-link>
    <Checkbox v-model="model" :label="model"/>
    <div>{{model}}</div>

      <Select
        placeholder="placeholderDefault"
        :options="selectPaymentOptions"
        v-model="selectPayment"
        outline
        isMultiple
      />
    </div>
</template>
