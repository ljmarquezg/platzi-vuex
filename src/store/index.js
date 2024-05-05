import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      username: 'Current User'
    }
  }
})

export default store
