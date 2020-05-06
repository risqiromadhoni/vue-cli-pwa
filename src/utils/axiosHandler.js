import { SUCCESS_STATUS_CODE } from "@/constants/response";
import { getToken, clearToken } from "./token";
import toast from "./toast";
import { store } from "@/store";
import app from "../main";

/* axiosHandler - START */
// Description : axiosHandler is collection function for handling request, response, and error handlers.
// Author : Risqi Romadhoni <risqir57@gmail.com>
/* Version : 1.0:1. */

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function arrayErrorHandling(value, key) {
  // Declare custome BreakException for breaking array foreach function
  const BreakException = {};

  Array.from(value).forEach(item => {
    try {
      item = item.replace(/'/g, '"');
      item = JSON.parse(item);
    } catch (e) {
      // When your need more debuging
    }

    if (Array.isArray(item)) {
      if (key) {
        arrayErrorHandling(item, key);
      } else {
        arrayErrorHandling(item);
      }
    }

    if (typeof item === "object") {
      objectErrorHandling(item);
    }

    if (typeof item === "string") {
      if (item === "Signature has expired.") {
        toast.error("Session has expired.");
        clearToken();
        throw BreakException;
      }
      if (key) {
        const keyField = capitalize(key.replace("_", " "));
        toast.error(`Field ${keyField}, ${item}`);
      } else {
        toast.error(item);
      }
    }
  });
}

function objectErrorHandling(value) {
  for (const key in value) {
    if (process.env.VUE_APP_LANG.split(" ").includes(key)) {
      toast.error(value[store.state.lang.locale]);
      break;
    } else {
      if (Array.isArray(value[key])) {
        arrayErrorHandling(value[key], key);
        continue;
      }

      if (typeof value[key] === "object") {
        objectErrorHandling(value[key]);
        continue;
      }

      if (typeof value[key] === "string") {
        if (value[key] === "Signature has expired.") {
          clearToken();
          toast.error("Session has expired.");
          return;
        }
        const isNumber = isNaN(key);
        if (isNumber) {
          toast.error(`Field ${key}, ${value[key]}`);
        } else {
          toast.error(value[key]);
        }
        continue;
      }
    }
  }
}

export function errorResponseHandler(error) {
  app.$Progress.fail();
  // Stop hourglass loader
  //   $('#hourglassLoader').hide()

  if (
    // eslint-disable-next-line no-prototype-builtins
    error.config.hasOwnProperty("errorHandle") &&
    error.config.errorHandle === false
  ) {
    return Promise.reject(error);
  }

  if (error.response) {
    const response = error.response;

    if (response.status === 401) {
      // clearToken()
      return;
    }

    // if type data is array
    if (Array.isArray(response.data)) {
      arrayErrorHandling(response.data);
      return;
    }

    if (typeof response.data === "object") {
      objectErrorHandling(response.data);
      return;
    }

    // If type data is string
    if (typeof response.data === "string") {
      if (response.statusText === "Signature has expired.") {
        clearToken();
        toast.error("Session has expired.");
        return;
      }
      toast.error(response.statusText);
      return;
    }

    return Promise.reject(error);
  } else {
    return Promise.reject(error);
  }
}

export function responseHandler(response) {
  app.$Progress.finish();
  // Stop hourglass loader
  //   $('#hourglassLoader').hide()

  if (SUCCESS_STATUS_CODE.includes(response.status)) {
    return response;
  }
  return null;
}

export function requestHandler(config) {
  app.$Progress.start();
  // Start hourglass loader
  //   $('#hourglassLoader').show()

  // Get token from function getToken
  let token = getToken();
  // Check token not null value
  if (token) {
    config.headers.authorization = `JWT ${token}`;
  }
  return config;
}

export function errorRequestHandler(error) {
  app.$Progress.fail();
  toast.error(error);
  return Promise.reject(error);
}

/* axiosHandler - END */
