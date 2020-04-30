/* eslint-disable no-unused-vars */
import {
  SET_ORDER,
  SET_ORDER_DETAIL,
  UPDATE_ORDER,
  DELETE_ORDER,
  ADD_ORDER
} from "@/store/utils/mutations";

export default {
  async setOrderStep({ commit }, payload) {
    await new Promise((resolve, reject) => {
      commit(SET_ORDER, payload);
      resolve(payload);
    });
  },
  async setOrderDetail({ commit }, payload) {
    await new Promise((resolve, reject) => {
      commit(SET_ORDER_DETAIL, payload);
      resolve(payload);
    });
  }
};
