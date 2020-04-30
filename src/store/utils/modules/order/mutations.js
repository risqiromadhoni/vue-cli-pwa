/* eslint-disable no-unused-vars */
import {
  SET_ORDER,
  SET_ORDER_DETAIL,
  UPDATE_ORDER,
  DELETE_ORDER,
  ADD_ORDER
} from "@/store/utils/mutations";

export default {
  [SET_ORDER](state, payload) {
    return (state.step = payload);
  },
  [SET_ORDER_DETAIL](state, payload) {
    return (state.form = payload);
  }
};
