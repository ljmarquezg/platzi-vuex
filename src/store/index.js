import { createStore } from 'vuex'
import { getUser } from "@/api";
import { COMMIT_UPDATE_USERNAME } from "@/common/mutation-types";

const store = createStore({
  state() {
    return {
      username: 'Current User'
    }
  },
  getters: {
    getUsername(state) {
      return state.username
    }
  },
  mutations: {
    [COMMIT_UPDATE_USERNAME](state, newUsername) {
      state.username = newUsername
    }
  },
  actions: {
    async updateUsername({ commit, state }, newUsername) {
      const user =  await getUser(1);
      commit(COMMIT_UPDATE_USERNAME, user.username)
    }
  }
})

export default store
