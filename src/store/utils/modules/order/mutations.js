/* eslint-disable no-unused-vars */
import {
  SET_ORDER,
  UPDATE_ORDER,
  DELETE_ORDER,
  ADD_ORDER
} from "@/store/utils/mutations";

export default {
  [SET_ORDER](state, payload) {
    return (state.step = payload);
  }
};
