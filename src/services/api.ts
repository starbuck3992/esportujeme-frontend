import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
// import {useLoadingStore} from '@/stores/loading';
// import {useUserStore} from '@/stores/user';

class Api {
  private apiInstance: AxiosInstance;
  // private loadingStore: any;
  // private authManagerStore: any;

  constructor() {
    this.apiInstance = axios.create({
      baseURL: import.meta.env.API_URL,
      withCredentials: true,
    });

    this.apiInstance.interceptors.request.use(this.handleRequestSuccess, this.handleRequestError);
    this.apiInstance.interceptors.response.use(this.handleResponseSuccess, this.handleResponseError);

    // this.loadingStore = useLoadingStore();
    // this.authManagerStore = useUserStore();
  }

  handleRequestSuccess(config: AxiosRequestConfig): AxiosRequestConfig {
    // this.loadingStore.updateLoading();
    return config;
  }

  handleRequestError(error: any): Promise<any> {
    return Promise.reject(error);
  }

  handleResponseSuccess(response: AxiosResponse): AxiosResponse {
    // this.loadingStore.updateLoading();
    return response;
  }

  async handleResponseError(error: any): Promise<any> {
    // if ([401, 403, 419].includes(error.response.status)) {
    //   try {
    //     if (this.authManagerStore.loggedIn) {
    //       await this.authManagerStore.logout();
    //       await router.push({name: 'homeIndex'});
    //     }
    //     await router.push({name: 'homeIndex'});
    //   } catch (e) {
    //     console.log(error);
    //   }
    // }
    return Promise.reject(error);
  }

  sanctumCookie() {
    return this.apiInstance.get('/register');
  }

  userRegister(payload) {
    return this.apiInstance.post('/register', payload);
  }

  userLogin(payload) {
    return this.apiInstance.post('/login', payload);
  }

  userLogout() {
    return this.apiInstance.post('/logout');
  }

  userForgotPassword(payload) {
    return this.apiInstance.post('/forgot-password', payload);
  }

  userResetPassword(payload) {
    return this.apiInstance.post('/reset-password', payload);
  }

  userUpdatePassword(payload) {
    return this.apiInstance.put('/user/password', payload);
  }

  userSocialAuthentication(provider) {
    return this.apiInstance.get(`/api/authorize/${provider}/redirect`);
  }

  userSocialLogin(payload) {
    return this.apiInstance.get(`/api/authorize/${payload.provider}/login`, payload.parameters);
  }
}

export default new Api;
