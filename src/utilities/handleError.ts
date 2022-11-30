import {isNil} from 'lodash-es';
import {NotificationEnum} from '@/enums/NotificationEnum';
import {useNotificationStore} from '@/stores/notification';

export const handleError = (error: any) => {
  const {setNotification} = useNotificationStore();

  if (!isNil(error.response.data)) {
    if (error.response.status === 422 || error.response.status === 401) {
      return error.response.data.message;
    } else {
      setNotification(NotificationEnum.ERROR, error.response.message);
    }
  }
  // TODO i18N
  setNotification(NotificationEnum.ERROR, 'Server je nedostupný');
};
