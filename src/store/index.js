import { createStore } from 'vuex'
import profile from "@/store/modules/profile";
import { COMMIT_UPDATE_STATUS } from "@/common/mutation-types";

const store = createStore({
  state() {
    return {
      status: null,
    }
  },
  mutations: {
    [COMMIT_UPDATE_STATUS](state, newStatus) {
      state.status = newStatus;
    }
  },
  modules: {
    profile
  }
})

export default store
