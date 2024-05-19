import { COMMIT_UPDATE_STATUS, COMMIT_UPDATE_USERNAME } from "@/common/mutation-types";
import { getUser } from "@/api";

const profile = {
  state() {
    return {
      username: ""
    };
  },
  getters: {
    getUsername(state) {
      return state.username
    }
  },
  mutations: {
    [COMMIT_UPDATE_USERNAME](state, newUsername) {
      state.username = newUsername;
    }
  },
  actions: {
    async updateUsername({ commit, state }, newUsername) {
      const user = await getUser(1);
      commit(COMMIT_UPDATE_STATUS, user.username ? 'active' : 'inactive', { root: true });
      commit(COMMIT_UPDATE_USERNAME, user.username);
    },
  },
};

export default profile;
