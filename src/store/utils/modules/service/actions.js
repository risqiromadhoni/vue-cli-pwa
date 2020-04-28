/* eslint-disable no-unused-vars */
import {
  SET_SERVICE,
  UPDATE_SERVICE,
  DELETE_SERVICE,
  ADD_SERVICE
} from "@/store/utils/mutations";
import {
  getService
} from "@/utils/api";

export default {
  async setService({
    commit
  }) {
    await new Promise((resolve, reject) => {
      getService()
        .then((result) => {
          commit(SET_SERVICE, result);
          resolve(result);
        }).catch((err) => {
          reject(err);
        });
    });
  }
};