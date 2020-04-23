import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import filters from "@/utils/filters";

// Bootstraping Javascript
import "./frontend";

// Plugin
import i18n from "./plugins/i18n";
import "./plugins/bootstrap-vue";
import "./plugins/swiper-vue";
import "./plugins/lazyload-vue";
import "./plugins/faker-vue";
import "./plugins/axios";
import "./plugins/progress-vue";
import "./plugins/select2-vue";
import "./plugins/calendar-vue";

Vue.config.productionTip = false;

// Registering filter into global vue
for (let name in filters) {
  Vue.filter(name, filters[name]);
}

export default new Vue({
  router,
  store,
  i18n,
  filters,
  render: h => h(App)
}).$mount("#app");
