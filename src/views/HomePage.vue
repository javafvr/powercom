<script>
export default {
  name: "HomePage",
  props: {
    msg: String,
  },
};
</script>
<template>
    <div>
    <div>Home</div>
    <router-link to="/Dashboard">Dashboard</router-link>
    </div>
</template>
