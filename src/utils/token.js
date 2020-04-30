import router from "@/router";
import { store } from "@/store";
const jwt = require("jsonwebtoken");

/* token - START */
// Description : token have collection function for manage token like
// getToken, setToken, and clearToken ( and push router into login ).
// Author : Risqi Romadhoni <risqir57@gmail.com>
/* Version : 1.0:1. */

// Get token from localStorage
export function getToken() {
  return localStorage.getItem("token");
}

// Set token into localStorage with key token
export function setToken(token) {
  localStorage.setItem("token", token);
}

// Get user information from token
export function getUserFromToken() {
  const token = getToken();
  const payload = jwt.decode(token);
  return {
    // TODO: get user id and name from jwt decode
    id: payload.user_id,
    username: payload.username
  };
}

function getRoute(name) {
  let result = null;
  router.options.routes.forEach(route => {
    if (route.name === name) {
      result = route;
    }
  });
  return result;
}

// Clear with commit setLogout store also push router into login
export function clearToken() {
  store.commit("setLogout");
  localStorage.clear();
  const route = getRoute("Login");
  window.location.href = route.path;
}

/* token - END */
