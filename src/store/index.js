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
  }
})

export default store
