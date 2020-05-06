/* eslint-disable no-unused-vars */
import {
  SET_ORDER,
  SET_ORDER_DETAIL,
  UPDATE_ORDER,
  DELETE_ORDER,
  ADD_ORDER
} from "@/store/utils/mutations";
import _ from "lodash";

export default {
  [SET_ORDER](state, payload) {
    return (state.step = payload);
  },
  [SET_ORDER_DETAIL](state, payload) {
    // TODO: Store data if not exist on stores.
    switch (payload.key) {
      case "product":
        if (typeof state.form[payload.key] !== "undefined") {
          const findItem = _.findIndex(
            state.form[payload.key],
            i => i.id === payload.data.id
          );
          if (findItem >= 0)
            return _.pullAt(state.form[payload.key], [findItem]);
          else return state.form[payload.key].push(payload.data);
        } else return (state.form[payload.key] = _.castArray(payload.data));
      default:
        return (state.form[payload.key] = payload.data);
    }
  },
  [DELETE_ORDER](state) {
    return (state.form = {});
  }
};
