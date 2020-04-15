import {
  SET_CARTS,
  UPDATE_CARTS,
  ADD_CARTS,
  DELETE_CARTS
} from "@/store/utils/mutations";

export default {
  [SET_CARTS](state, payload) {
    return (state.carts = payload);
  },
  [UPDATE_CARTS](state, payload) {
    // Update Qty
    let arr = state.carts.find(el => el.id === payload.id);
    if (payload.activity == "inc") {
      let qty = Math.round(arr.qty + 1);
      return (arr.qty = qty);
    } else {
      if (arr.qty === 1) {
        return state.carts.splice(arr, 1);
      } else {
        let qty = Math.round(arr.qty - 1);
        return (arr.qty = qty);
      }
    }
  },
  [DELETE_CARTS](state, payload) {
    let arr = state.carts.find(el => el.id === payload.id);
    return state.carts.splice(arr, 1);
  },
  [ADD_CARTS](state, payload) {
    return (state.carts = payload);
  }
};
