<script setup>
import Checkbox from "@/components/Checkbox"; 
import { ref } from "vue";

const model = ref("unchecked");
</script>
<template>
    <div>
    <div>Home</div>
    <router-link to="/Dashboard">Dashboard</router-link>
    <Checkbox v-model="model" :label="model"/>
    <div>{{model}}</div>
    </div>
</template>
