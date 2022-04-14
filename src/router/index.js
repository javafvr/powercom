import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import LoginPage from "@/views/LoginPage.vue";
import DashboardPage from "@/views/DashboardPage.vue";

const routerHistory = createWebHistory();
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      component: HomePage,
      meta: {
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
    },
    {
      path: "/dashboard",
      component: DashboardPage,
      meta: {
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
  ],
});
export default router;
