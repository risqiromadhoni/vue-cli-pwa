/* eslint-disable no-unused-vars */
import {
  SET_REGENCY,
  UPDATE_REGENCY,
  DELETE_REGENCY,
  ADD_REGENCY
} from "@/store/utils/mutations";
import CityService from "@/services/CityService";

export default {
  async getRegency({ commit }) {
    await new Promise((resolve, reject) => {
      CityService.getCity()
        .then(result => {
          commit(SET_REGENCY, result.data);
          resolve(result);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};
