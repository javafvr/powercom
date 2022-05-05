<script setup>
/* eslint-disable vue/multi-word-component-names */
</script>

<template>
  <div class="container">
    <video
      playsinline
      autoplay
      muted
      loop
      :poster="require('../../public/images/bg.jpg')"
    >
      <source
        :src="require('@/../public/images/bgvideof.webm')"
        type="video/webm"
      />
      Your browser does not support the video tag.
    </video>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.container {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
}

video {
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: -1;
}

main {
  margin: 0;
}

@media only screen and (min-width: 576px) {
  .container {
    position: relative;
    display: flex;
    flex-direction: row;
    height: 100vh;
    justify-content: flex-start;
    align-items: center;
  }

  main {
    margin-left: 7%;
  }
}
</style>
