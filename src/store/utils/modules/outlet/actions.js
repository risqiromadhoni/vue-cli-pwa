/* eslint-disable no-unused-vars */
import {
  SET_OUTLET,
  UPDATE_OUTLET,
  DELETE_OUTLET,
  ADD_OUTLET
} from "@/store/utils/mutations";
import OutletService from "@/services/OutletService";

export default {
  async getOutlet({ commit }) {
    await new Promise((resolve, reject) => {
      OutletService.getOutlet()
        .then(result => {
          commit(SET_OUTLET, result.data);
          resolve(result);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};
