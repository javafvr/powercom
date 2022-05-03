<script setup>
import TopPanel from "@/components/TopPanel";
import Search from '@/components/Search';

const menuItems = [
  { url: "/", title: "Components" },
  { url: "/", title: "Multi Rates" },
  { url: "/Login", title: "Data Reading" },
  { url: "/Vee", title: "VEE" },
  { url: "/Dashboard", title: "Commands" },
  { url: "/Login", title: "Analytics" },
  { url: "/Login", title: "Management" },
  { url: "/Dashboard", title: "Settings" },
];
const currentUser = {
  url: "/",
  title: "John Doe",
  image: require("@/components/TopPanel/images/user1.jpg"),
};

</script>
<template>
  <div class="container">
    <nav>
      <TopPanel :menuItems="menuItems" :user="currentUser" :hideLogo="true" :hideDesktopMenu="true" :hideMobileMenu="true">
        <template #customSearch>
          <Search outline/>
        </template>
      </TopPanel>
    </nav>
    <main>
      <MainContent>
        <router-view></router-view>
      </MainContent>
    </main>
    <footer></footer>
  </div>
</template>
<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 0.1fr 0.5fr auto 1fr;
  grid-template-areas: "nav" "sidemenu" "main" "aside";
  grid-gap: 0px;
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
    grid-template-columns: auto auto auto;
    grid-template-rows: 64px 1.5fr 56px;
    grid-template-areas: "nav nav nav" "sidemenu main aside" "footer footer footer";
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