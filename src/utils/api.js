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

export function getService() {
  let data = [];
  const service = ["Nasi Boks", "Reservasi Tempat", "Sedekah Nasi Boks"];
  for (let i = 0; i < service.length; i++) {
    data.push({
      name: service[i],
      img: `icons/services-${i}.png`,
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    });
  }
  return data;
}