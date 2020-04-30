"use strict";

import axios from "axios";
import {
  requestHandler,
  responseHandler,
  errorResponseHandler
} from "@/utils/axiosHandler";

// Full config:  https://github.com/axios/axios#request-config
axios.defaults.baseURL = process.env.VUE_APP_API_URL;
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/json';

let config = {
  baseURL: process.env.VUE_APP_API_URL || ""
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(requestHandler);

// Add a response interceptor
_axios.interceptors.response.use(responseHandler, errorResponseHandler);

export default () => {
  return _axios;
};
