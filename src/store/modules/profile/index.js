import { COMMIT_UPDATE_USERNAME } from "@/common/mutation-types";
import { getUser } from "@/api";

const profile = {
  state() {
    return {
      username: "magolujo",
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
      console.log('test');
      const user = await getUser(1);
      console.log(newUsername);
      commit(COMMIT_UPDATE_USERNAME, user.username);
    },
  },
};

export default profile;
