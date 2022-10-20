import {useMessageStore} from '@/stores/message';

export const handleSuccess = (message: string) => {
  const messageStore = useMessageStore();
  messageStore.setMessage(message);
};
