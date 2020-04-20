import Vue from "vue";
import VueRouter from "vue-router";
import { routes } from "./routes";
import app from "../main";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: process.env.VUE_APP_ROUTER_MODE,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        x: 0,
        y: 0
      };
    }
  }
});

// eslint-disable-next-line no-unused-vars
router.beforeResolve((to, from, next) => {
  if (to.name) {
    app.$Progress.start();
  }
  next();
});

// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
  app.$Progress.finish();
});

export default router;
