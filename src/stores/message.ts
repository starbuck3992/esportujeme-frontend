import {defineStore} from 'pinia';

interface State {
    title: string,
    message: string
}

export const useMessageStore = defineStore('message', {
  state: (): State => ({
    title: '',
    message: '',
  }),
  getters: {
    isMessageSet: (state) => !!state.message,
  },
  actions: {
    setMessage(title: string, message: string) {
      this.title = title;
      this.message = message;
    },
    clearMessage() {
      this.$reset();
    },
  },
});
