import {defineStore} from 'pinia';

interface State {
    message: string
}

export const useMessageStore = defineStore('message', {
  state: (): State => ({
    message: '',
  }),
  getters: {
    isMessageSet: (state) => !!state.message,
  },
  actions: {
    setMessage(message: string) {
      this.message = message;
    },
    clearMessage() {
      this.$reset();
    },
  },
});
