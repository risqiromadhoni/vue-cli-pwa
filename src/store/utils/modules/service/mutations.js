/* eslint-disable no-unused-vars */
import {
  SET_SERVICE,
  UPDATE_SERVICE,
  DELETE_SERVICE,
  ADD_SERVICE,
} from "@/store/utils/mutations";

export default {
  [SET_SERVICE](state, payload) {
    return (state.services = payload);
  }
};