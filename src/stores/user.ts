import {defineStore} from 'pinia';

interface State {
  userId: number | null
  nickname: string
  avatar: string
}

export const useUserStore = defineStore('user', {
  state: (): State => ({
    userId: null,
    nickname: '',
    avatar: '',
  }),
  getters: {
    loggedIn: (state) => state.userId !== null,
  },
  actions: {
    updateUser(payload) {
      this.userId = payload.id;
      this.nickname = payload.nickname;
      this.avatar = payload.avatar;
    },
    clearUser() {
      this.$reset();
    },
  },
  persist: true,
});


