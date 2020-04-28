"use strict";

/* eslint-disable no-unused-vars */
import axios from "axios";

export const baseApiUrl = process.env.VUE_APP_API_URL || "";
export const baseWebUrl = "/";
const GET_TIMEOUT = 20000;
const POST_TIMEOUT = 120000;
const DOWNLOAD_TIMEOUT = 120000;

export function getHeader(
  isMultipartForm,
  useAuthHeader,
  bearerTokenOverride = null
) {
  let obj;
  if (isMultipartForm) {
    obj = {
      "Content-Type": "multipart/form-data"
    };
  } else {
    obj = {
      "Content-Type": "application/json",
      Accept: "application/json"
    };
  }

  if (useAuthHeader) {
    obj.Authorization = localStorage.getItem("token");
  }

  // if (bearerTokenOverride) {
  //     obj.Authorization = `Bearer ${bearerTokenOverride}`;
  // } else if (useAuthHeader && getCredential().accessToken != null) {
  //     obj.Authorization = `Bearer ${getCredential().accessToken}`;
  //     obj["x-access-id"] = getCredential().currentAccessId;
  // }

  return obj;
}

export function commonHttpErrorHandler(error, showErrorNotification) {
  let errorTitle = `Error: ${error.name} - ${error.message}`;
  let errorMessage = "";
  if (error.response) {
    // The request was made and the server responded with a status code that falls
    // out of the range of 2xx
    errorTitle = `Error ${error.response.status}`;

    // if (isRedirectLogin(error.response.status)) {
    //     return handleTokenError();
    // }
    if (error.response.data && error.response.data.message) {
      errorMessage = error.response.data.message;
    }
    if (
      error.response.data &&
      error.response.data.errors &&
      Array.isArray(error.response.data.errors)
    ) {
      const tempMessage = error.response.data.errors
        .map(e => e.message || "-")
        .join(",");
      errorMessage += `. ${tempMessage}`;
    }

    if (!errorMessage) {
      errorMessage = JSON.stringify(error.response.data);
      errorMessage = errorMessage.substring(
        0,
        Math.min(errorMessage.length, 100)
      );
    }
  } else if (/^timeout of .*ms exceeded$/.test(error.message)) {
    errorTitle = "Error: Timeout";
    errorMessage = `Gagal memperoleh response setelah ${GET_TIMEOUT} ms`;
  } else {
    // Something happened in setting up the request that triggered an Error
    errorMessage = JSON.stringify(error);
    errorMessage = errorMessage.substring(
      0,
      Math.min(errorMessage.length, 100)
    );
  }

  // eslint-disable-next-line no-empty
  if (showErrorNotification) {}
  throw errorMessage;
}

export function commonHttpSuccessHandler(start, {
  data
}) {
  if (data && !data.errors) {
    return data;
  }
  // eslint-disable-next-line no-undef
  throw new UnexpectedError("Server Error", data);
}

export function get({
  path,
  params = {},
  cacheConfig = null,
  useAuthHeader = true,
  acceptHeader = "application/json",
  bearerTokenOverride = null,
  showErrorNotification = true
}) {
  return axios({
      url: baseApiUrl + path,
      method: "GET",
      params,
      headers: {
        ...getHeader(false, useAuthHeader, bearerTokenOverride),
        Accept: acceptHeader
      },
      timeout: GET_TIMEOUT
    })
    .then(({
      data
    }) => {
      if (data.data && !data.errors) {
        if (cacheConfig != null) {
          // eslint-disable-next-line no-undef
          setApiCache(path, data, cacheConfig);
        }
        return data;
      }

      // eslint-disable-next-line no-undef
      throw new UnexpectedError("Server Error", data);
    })
    .catch(error => {
      if (error.message === "Network Error") {
        // eslint-disable-next-line no-undef
        const data = getApiCache(path);
        console.log(`>>> Get From Cache : ${JSON.stringify(data)}`);
        if (data != null) {
          return data;
        }
      }

      return commonHttpErrorHandler(error, showErrorNotification);
    });
}

export function post({
  path,
  params = {},
  useAuthHeader = true,
  isMultipartForm = false,
  showErrorNotification = true
}) {
  const start = Date.now();
  return axios
    .post(baseApiUrl + path, params, {
      headers: getHeader(isMultipartForm, useAuthHeader),
      timeout: POST_TIMEOUT
    })
    .then(response => commonHttpSuccessHandler(start, response))
    .catch(error => commonHttpErrorHandler(error, showErrorNotification));
}

export function put({
  path,
  params = {},
  useAuthHeader = true,
  isMultipartForm = false,
  showErrorNotification = true
}) {
  const start = Date.now();
  return axios
    .put(baseApiUrl + path, params, {
      headers: getHeader(isMultipartForm, useAuthHeader),
      timeout: POST_TIMEOUT
    })
    .then(response => commonHttpSuccessHandler(start, response))
    .catch(error => commonHttpErrorHandler(error, showErrorNotification));
}

export function del({
  path,
  params = {},
  useAuthHeader = true,
  isMultipartForm = false,
  showErrorNotification = true
}) {
  const start = Date.now();
  return axios({
      url: baseApiUrl + path,
      method: "delete",
      params,
      headers: getHeader(isMultipartForm, useAuthHeader),
      timeout: POST_TIMEOUT
    })
    .then(response => commonHttpSuccessHandler(start, response))
    .catch(error => commonHttpErrorHandler(error, showErrorNotification));
}

export function upload({
  path,
  bodyFormData,
  useAuthHeader = true
}) {
  const start = Date.now();
  return axios
    .post(baseApiUrl + path, bodyFormData, {
      headers: getHeader(true, useAuthHeader),
      timeout: POST_TIMEOUT
    })
    .then(response => commonHttpSuccessHandler(start, response))
    .catch(commonHttpErrorHandler);
}

export function download({
  method = "GET",
  path,
  params = {},
  useAuthHeader = true
}) {
  // const start = Date.now();
  return axios({
      baseURL: baseApiUrl + path,
      path,
      method,
      params,
      headers: getHeader(false, useAuthHeader),
      timeout: DOWNLOAD_TIMEOUT,
      responseType: "blob"
    })
    .then(response => {
      // reportTrackTiming(start, response);
      const downloadUrl = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = downloadUrl;

      const header = response.headers["content-disposition"];
      let filename = "file";

      if (header) {
        const startIndex = header.indexOf("filename=") + 10;
        const endIndex = header.length - 1;
        if (startIndex > -1) {
          filename = header.substring(startIndex, endIndex);
        }
      }

      link.setAttribute("download", filename);
      document.body.appendChild(link);
      link.click();
      link.remove();

      return response;
    })
    .catch(commonHttpErrorHandler);
}