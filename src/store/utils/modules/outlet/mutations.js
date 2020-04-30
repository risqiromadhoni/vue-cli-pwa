/* eslint-disable no-unused-vars */
import {
  SET_OUTLET,
  UPDATE_OUTLET,
  DELETE_OUTLET,
  ADD_OUTLET
} from "@/store/utils/mutations";

export default {
  [SET_OUTLET](state, payload) {
    return (state.outlet = payload);
  }
};
