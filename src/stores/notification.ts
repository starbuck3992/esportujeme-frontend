import {defineStore} from 'pinia';
import {NotificationEnum} from '@/enums/NotificationEnum';

interface State {
  type: NotificationEnum
  message: string
}

export const useNotificationStore = defineStore('notification', {
  state: (): State => ({
    type: NotificationEnum.INFORMATION,
    message: '',
  }),
  getters: {
    isNotificationSet: (state) => !!state.message,
  },
  actions: {
    setNotification(type: NotificationEnum, message: string) {
      this.type = type;
      this.message = message;
    },
    clearNotification() {
      this.$reset();
    },
  },
});
