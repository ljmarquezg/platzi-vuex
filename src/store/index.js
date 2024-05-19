import { createStore } from 'vuex'
import profile from "@/store/modules/profile";

const store = createStore({
  modules: {
    profile
  }
})

export default store
