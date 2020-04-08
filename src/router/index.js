import Vue from "vue";
import VueRouter from "vue-router";
import { routes } from "./routes";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: process.env.VUE_APP_ROUTER_MODE,
  routes
});

export default router;
