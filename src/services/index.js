import axios from "axios";
import app from "@/main";

let config = {
  baseURL: process.env.VUE_APP_API_URL || ""
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    app.$Progress.start();
    app.$bvToast.toast(config, {
      title: `HTTP Request Send`,
      variant: "primary",
      solid: true
    });
    return config;
  },
  function (error) {
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
  function (response) {
    // Do something with response data
    app.$Progress.finish();
    app.$bvToast.toast(config, {
      title: `HTTP Response`,
      variant: "success",
      solid: true
    });
    return response;
  },
  function (error) {
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