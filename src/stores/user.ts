import {defineStore} from 'pinia';

interface State {
    userId: number | null
    nickName: string
    avatar: string
}

export const useUserStore = defineStore('user', {
  state: (): State => ({
    userId: null,
    nickName: '',
    avatar: '',
  }),
  getters: {
    loggedIn: (state) => state.userId !== null,
  },
  actions: {
    updateUser(payload) {
      this.userId = payload.userId;
      this.nickName = payload.nickName;
      this.avatar = payload.avatar;
    },
    clearUser() {
      this.$reset();
    },
  },
  persist: true,
});


