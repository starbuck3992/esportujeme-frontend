import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import router from '@/router';
import {ROUTES} from '@/router/routes';
import store from '@/stores/store';
import {useUserStore} from '@/stores/user';

class Api {
  private apiInstance: AxiosInstance;

  constructor() {
    this.apiInstance = axios.create({
      baseURL: import.meta.env.VITE_API_URL,
      withCredentials: true,
    });
    this.apiInstance.interceptors.request.use(this.handleRequestSuccess, this.handleRequestError);
    this.apiInstance.interceptors.response.use(this.handleResponseSuccess, this.handleResponseError);
  }

  handleRequestSuccess(config: AxiosRequestConfig): AxiosRequestConfig {
    const userStore = useUserStore(store);
    const token = userStore.token;

    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${token}`;

    return config;
  }

  handleRequestError(error: any): Promise<any> {
    return Promise.reject(error);
  }

  handleResponseSuccess(response: AxiosResponse): AxiosResponse {
    return response;
  }

  async handleResponseError(error: any): Promise<any> {
    const userStore = useUserStore(store);
    if ([401, 403, 419].includes(error.response.status)) {
      try {
        if (userStore.loggedIn) {
          userStore.clearUser();
          await this.logout();
        }
        await router.push({name: ROUTES.HOME_PAGE});
      } catch (e) {
        console.error(e);
      }
    }
    return Promise.reject(error);
  }

  register(payload) {
    return this.apiInstance.post('/api/register', payload);
  }

  login(payload) {
    return this.apiInstance.post('/api/login', payload);
  }

  logout() {
    return this.apiInstance.post('/api/logout');
  }

  forgotPassword(payload) {
    return this.apiInstance.post('/forgot-password', payload);
  }

  resetPassword(payload) {
    return this.apiInstance.post('/reset-password', payload);
  }

  updatePassword(payload) {
    return this.apiInstance.put('/user/password', payload);
  }

  socialAuthentication(provider) {
    return this.apiInstance.get(`/api/authorize/${provider}/redirect`);
  }

  socialLogin(payload) {
    return this.apiInstance.get(`/api/authorize/${payload.provider}/login`, payload.parameters);
  }

  userSettings() {
    return this.apiInstance.get('/api/users/settings');
  }

  userProviders() {
    return this.apiInstance.get('/api/users/providers');
  }

  updateUserSettings(payload) {
    return this.apiInstance.post('/api/users/settings', payload);
  }

  uploadImage(payload) {
    return this.apiInstance.post('/api/images', payload, {headers: {
      'Content-Type': 'multipart/form-data',
    }});
  }

  getTournament(slug) {
    return this.apiInstance.get(`/api/tournaments/${slug}`);
  }
}

export default new Api();
