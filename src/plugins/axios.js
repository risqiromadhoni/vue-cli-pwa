"use strict";

import Vue from "vue";
import Base from "@/services";

// eslint-disable-next-line no-unused-vars
Plugin.install = function(Vue, options) {
  Vue.axios = Base();
  window.axios = Base();
  Object.defineProperties(Vue.prototype, {
    $axios: {
      get() {
        return Base();
      }
    }
    // TODO: add $axiosAuth for Base Auth Function
  });
};

Vue.use(Plugin);

export default Plugin;
