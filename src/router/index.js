import Vue from "vue";
import VueRouter from "vue-router";
import { routes } from "./routes";

Vue.use(VueRouter);

let router_mode = "hash";
if (process.env.NODE_ENV === "production") {
  router_mode = "history";
}

const router = new VueRouter({
  mode: router_mode,
  routes
});

export default router;
