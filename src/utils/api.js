/* eslint-disable no-unused-vars */
import Vue from "vue";
import app from "../main";

export function getCart() {
  let carts = [];
  for (let i = 1; i < 5; i++) {
    carts.push({
      id: i,
      name: Vue.faker().commerce.productName(),
      price: Vue.faker().commerce.price(),
      send: Vue.faker().commerce.price(),
      qty: i
    });
  }
  return carts;
}

export function getService() {
  return app.$axios.get({
    path: "/service"
  });
}
