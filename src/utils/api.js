/* eslint-disable no-unused-vars */
import Vue from "vue";
import {
  post,
  get,
  put,
  del,
  upload,
  download
} from "@/utils/httpHelper";

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