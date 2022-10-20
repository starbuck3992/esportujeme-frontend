import {useMessageStore} from '@/stores/message';

export const handleError = (error: any) => {
  if (error.response) {
    if (error.response.status != 422 && error.response.data) {
      const messageStore = useMessageStore();
      messageStore.setMessage(error.response.data.message);
    } else {
      console.error(error);
      return error.response.data.message;
    }
  } else {
    console.error(error);
  }
};
