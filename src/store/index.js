import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
import modules from "./utils/modules";

import createPersistedState from "vuex-persistedstate";
import Cookies from "js-cookie";

const presisted = [
  createPersistedState({
    storage: {
      getItem: key => Cookies.get(key),
      // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
      setItem: (key, value) =>
        Cookies.set(key, value, {
          expires: 3,
          secure: true
        }),
      removeItem: key => Cookies.remove(key)
    }
  })
];

Vue.use(Vuex);

export default new Vuex.Store({
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
  modules: modules,
  plugins: [...presisted]
});
