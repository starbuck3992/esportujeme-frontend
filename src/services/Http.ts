import axios from "axios";
import store from "../store";
import router from "../router";

type HTTPMethods = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

class Http {
    constructor() {
        let service = axios.create({
            withCredentials: true
        });
        service.interceptors.request.use((config) => {
            store.commit('loadingModule/setLoading', true);
            return config;
        }, function (error) {
            store.commit('loadingModule/setLoading', false);
            return Promise.reject(error);
        });
        service.interceptors.response.use(this.handleSuccess, this.handleError);
        this.services = service;
    }

    handleSuccess(response) {

        store.commit('loadingModule/setLoading', false);
        return response;

    }

    handleError = async (error) => {
        store.commit('loadingModule/setLoading', false);
        if ([401, 403, 419].includes(error.response.status)) {
            try {
                if (store.getters['userModule/loggedIn']) {
                    await store.dispatch('userModule/logout');
                    await router.push({name: 'homeIndex'});
                }
                await router.push({name: 'homeIndex'});
            } catch (error) {
                if (error.response) {
                    setTimeout(() => store.commit('messagesModule/showException', error.response.data.message), 250)
                } else {
                    console.log(error);
                }
            }
        }
        return Promise.reject(error);
    }

    callAPI(method: HTTPMethods, url: string, parameters?: object, payload?: object, headers?: object, config?: object) {
        return this.services.request({
            method: method,
            url: url,
            responseType: 'json',
            params: parameters,
            data: payload,
            headers: headers,
            config: config
        })
    }

}

export default new Http;