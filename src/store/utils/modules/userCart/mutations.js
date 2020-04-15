import {
  SET_CARTS,
  UPDATE_CARTS,
  ADD_CARTS,
  DELETE_CARTS
} from "../../mutations";

export default {
  [SET_CARTS](state, payload) {
    return (state.carts = payload);
  },
  [UPDATE_CARTS](state, payload) {
    let foundIndex = state.carts.findIndex(el => el.id === payload.id);
    return (state.carts[foundIndex] = payload);
  },
  [ADD_CARTS](state, payload) {
    return (state.carts = payload);
  },
  [DELETE_CARTS](state, payload) {
    let arr = state.carts.find(el => el.id === payload.id);
    return state.carts.splice(arr, 1);
  }
};
