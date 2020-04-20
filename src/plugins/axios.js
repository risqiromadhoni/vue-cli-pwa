"use strict";

import Vue from "vue";
import axios from "axios";
import app from "../main";

// Full config:  https://github.com/axios/axios#request-config
axios.defaults.baseURL = process.env.VUE_APP_API_URL;
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    app.$Progress.start();
    app.$bvToast.toast(config, {
      title: `HTTP Request Send`,
      variant: "primary",
      solid: true
    });
    return config;
  },
  function(error) {
    // Do something with request error
    app.$Progress.fail();
    app.$bvToast.toast(error, {
      title: `HTTP Request Send Fail`,
      variant: "warning",
      solid: true
    });
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    app.$Progress.finish();
    app.$bvToast.toast(config, {
      title: `HTTP Response`,
      variant: "success",
      solid: true
    });
    return response;
  },
  function(error) {
    // Do something with response error
    app.$Progress.fail();
    app.$bvToast.toast(error, {
      title: `HTTP Response Fail`,
      variant: "warning",
      solid: true
    });
    return Promise.reject(error);
  }
);

// eslint-disable-next-line no-unused-vars
Plugin.install = function(Vue, options) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    }
  });
};

Vue.use(Plugin);

export default Plugin;
