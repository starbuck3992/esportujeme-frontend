import {defineStore} from 'pinia';

interface State {
    loading: boolean
}

export const useLoadingStore = defineStore('loading', {
  state: (): State => ({
    loading: false,
  }),
  actions: {
    updateLoading() {
      this.loading = !this.loading;
    },
  },
});
