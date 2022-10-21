import {NotificationEnum} from '@/enums/NotificationEnum';
import {useNotificationStore} from '@/stores/notification';

export const handleSuccess = (message: string) => {
  const {setNotification} = useNotificationStore();
  setNotification(NotificationEnum.SUCCESS, message);
};
