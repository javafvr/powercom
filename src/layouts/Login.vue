<script setup></script>
<template>
  <div class="container">
    <video playsinline autoplay muted loop :poster="require('../../public/images/bg.png')">
      <source src="https://cdn.videvo.ne1t/videvo_files/video/free/2019-07/small_watermarked/Raw_Vegan_Blueberry_Cake_Cut_Birthday_Cooking_preview.webm" type="video/webm">
      Your browser does not support the video tag.
    </video>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/styles/index";
.container {
  position: relative;
  // display: flex;
  // justify-content: flex-start;
  // align-items: center;
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
  // position: absolute;
  // min-width: 100%;
  // min-height: 100%;
  // top: 0;
  // left: 0;
  // display: flex;
  // justify-content: flex-start;
  // align-items: center;
}

@media only screen and (min-width: 1200px) {

}
</style>
<style lang="sass" module>
@import "@/assets/styles/utils.module"
</style>
