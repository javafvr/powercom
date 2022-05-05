import { createRouter, createWebHistory } from "vue-router";
import { auth } from "@/firebase";
import HomePage from "@/views/HomePage.vue";
import LoginPage from "@/views/LoginPage.vue";
import DashboardPage from "@/views/DashboardPage.vue";
import VeePage from "@/views/VeePage.vue";

const routerHistory = createWebHistory();
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      component: HomePage,
      meta: {
        requiresAuth: true,
        layout: 'home-layout',
        breadcrumb: [
          {
            text: 'Home'
          }
        ]
      }
    },
    {
      path: "/login",
      component: LoginPage,
      meta: {
        layout: 'login-layout',
      }
    },
    {
      path: "/dashboard",
      component: DashboardPage,
      meta: {
        requiresAuth: false,
        layout: 'default-layout',
        breadcrumb: [
          {
            text: 'Home',
            link: '/'
          },
          {
            text: 'MDM',
          }
        ]
      }
    },
    {
      path: "/vee",
      component: VeePage,
      meta: {
        requiresAuth: true,
        layout: 'vee-layout',
        breadcrumb: [
          {
            text: 'Home',
            link: '/'
          },
          {
            text: 'vee',
          }
        ]
      }
    },
    {
      path: "/forgot-password",
      component: VeePage,
      meta: {
        requiresAuth: true,
        layout: 'vee-layout',
        breadcrumb: [
          {
            text: 'Home',
            link: '/'
          },
          {
            text: 'vee',
          }
        ]
      }
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.path === '/login' && auth.currentUser) {
    next('/');
    return;
  }

  if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
    next("/login");
    return;
  }
  next();
})

export default router;
