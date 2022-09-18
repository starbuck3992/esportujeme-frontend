import {defineStore} from 'pinia';
import Api from '@/services/api';

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
    async forgotPassword(payload) {
      try {
        await Api.sanctumCookie();
        return Api.userForgotPassword(payload);
      } catch (e) {
        console.error(e);
      }
    },
    async register(payload) {
      try {
        await Api.sanctumCookie();
        return Api.userRegister(payload);
      } catch (e) {
        console.error(e);
      }
    },
    async login(payload) {
      try {
        await Api.sanctumCookie();
        const data = await Api.userLogin(payload);
        this.updateUser(data);
        return data;
      } catch (e) {
        console.error(e);
      }
    },
    async socialAuth(provider) {
      try {
        await Api.sanctumCookie();
        return Api.userSocialAuthentication(provider);
      } catch (e) {
        console.error(e);
      }
    },
    async socialLogin(payload) {
      try {
        await Api.sanctumCookie();
        const data = await Api.userSocialLogin(payload);
        this.updateUser(data);
        return data;
      } catch (e) {
        console.error(e);
      }
    },
    async logout() {
      try {
        await Api.sanctumCookie();
        await Api.userLogout();
        this.clearUser();
      } catch (e) {
        console.error(e);
      }
    },
    async resetPassword(payload) {
      try {
        await Api.sanctumCookie();
        return Api.userResetPassword(payload);
      } catch (e) {
        console.error(e);
      }
    },
    async updatePassword(payload) {
      try {
        await Api.sanctumCookie();
        return Api.userUpdatePassword(payload);
      } catch (e) {
        console.error(e);
      }
    },
    updateUser(payload) {
      this.userId = payload.userId;
      this.nickName = payload.nickName;
      this.avatar = payload.avatar;
    },
    clearUser() {
      this.$reset();
    },
  },
});


