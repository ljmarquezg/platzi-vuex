import { createStore } from 'vuex'

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
    updateUsername(state, newUsername) {
      state.username = newUsername
    }
  },
  actions: {
    updateUsername({commit, state}, newUsername) {
      commit('updateUsername', newUsername)
    }
  }
})

export default store
