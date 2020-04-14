import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

// Bootstraping Javascript
import "./frontend";

// Plugin
import "./plugins/bootstrap-vue";
import "./plugins/swiper-vue";
import "./plugins/lazyload-vue";
import "./plugins/faker-vue";
import i18n from "./plugins/i18n";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
