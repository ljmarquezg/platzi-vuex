import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      username: 'Current User'
    }
  },
  getters: {
    getUsername(state) {
      return state.username.split(' ')[0]
    }
  }
})

export default store
