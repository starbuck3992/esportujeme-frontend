import {defineStore} from 'pinia';

interface State {
  userId: number | null
  nickname: string
  avatar: string
  token: string
}

export const useUserStore = defineStore('user', {
  state: (): State => ({
    userId: null,
    nickname: '',
    avatar: '',
    token: '',
  }),
  getters: {
    loggedIn: (state) => state.userId !== null,
  },
  actions: {
    updateUser(payload) {
      this.userId = payload.id;
      this.nickname = payload.nickname;
      this.avatar = payload.avatar;
      this.token = payload.token;
      console.log(this.$state);
    },
    clearUser() {
      this.$reset();
    },
  },
  persist: true,
});


