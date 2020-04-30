/* eslint-disable no-unused-vars */
import {
  SET_REGENCY,
  UPDATE_REGENCY,
  DELETE_REGENCY,
  ADD_REGENCY
} from "@/store/utils/mutations";

export default {
  [SET_REGENCY](state, payload) {
    return (state.regency = payload);
  }
};
