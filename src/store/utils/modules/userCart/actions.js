/* eslint-disable no-unused-vars */
import {
  getCart
} from "@/utils/api";
import {
  SET_CARTS,
  UPDATE_CARTS,
  ADD_CARTS,
  DELETE_CARTS,
} from "@/store/utils/mutations";


export default {
  async setCarts({
    commit
  }) {
    await new Promise((resolve, reject) => {
      // getCart()
      //   .then(res => {
      //     commit(SET_CARTS, res.data)
      //     resolve(res.data)
      //   })
      //   .catch(err => {
      //     reject(err)
      //   })
      commit(SET_CARTS, getCart())
      resolve(getCart())
    })
  },
  async deleteCart({
    commit
  }, context) {
    await new Promise((resolve, reject) => {
      commit(DELETE_CARTS, context)
      resolve(context)
    })
  },
  async updateCart({
    commit
  }, context) {
    await new Promise((resolve, reject) => {
      commit(UPDATE_CARTS, context);
      resolve(context);
    })
  }
};