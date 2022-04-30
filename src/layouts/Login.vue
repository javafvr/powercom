<script setup></script>
<template>
  <div class="container">
    <video playsinline autoplay muted loop :poster="require('../../public/images/bg.png')">
      <source src="https://cdn.videvo.ne1t/videvo_files/video/free/2019-07/small_watermarked/Raw_Vegan_Blueberry_Cake_Cut_Birthday_Cooking_preview.webm" type="video/webm">
      Your browser does not support the video tag.
    </video>
    <main>
      <MainContent>
        <router-view></router-view>
      </MainContent>
    </main>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/styles/index";
.container {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-template-areas: "main";
  grid-gap: 0px;
}

video {
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: -1;
}

aside.menu {
  grid-area: sidemenu;
  width: 100%;
  padding-top: 40px;
  transition: all $main-transition;
}
aside {
  grid-area: aside;
  padding: 20px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 100%;
}
nav {
  grid-area: nav;
}
main {
  padding: 10px;
  grid-area: main;
}

@media only screen and (min-width: 576px) {
  .container {
    height: 100vh;
    grid-template-columns: 1fr auto;
    grid-template-rows: auto;
    grid-template-areas: "main aside";
    grid-gap: 0 24px;
  }
  .container.sidebar-opened {
    aside.menu {
      width: 285px;
    }
  }
  aside {
    padding: 80px 0 0 0;
  }
  aside.menu {
    width: 48px;
  }
  main {
    padding: 0;
  }
  footer {
    height: 44px;
  }
}
@media only screen and (min-width: 1200px) {
  .container {
    grid-template-rows: 96px 1.5fr;
  }
}
</style>
<style lang="sass" module>
@import "@/assets/styles/utils.module"
</style>
