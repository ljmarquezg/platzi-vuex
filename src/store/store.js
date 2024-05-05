import {reactive} from 'vue';

const store = reactive({
  username: 'admin',
  updateUsername(newUsername) {
    this.username = newUsername;
  }
})

export default store;
