import router from '@/router';
import {ROUTES} from '@/router/routes';
import Api from '@/services/api';
import {useUserStore} from '@/stores/user';
import {handleError} from '@/utilities/handleError';

export const useLogoutFlow = async () => {
  const userStore = useUserStore();

  try {
    await Api.sanctumCookie();
    await Api.logout();
    userStore.clearUser();
    await router.push({
      name: ROUTES.HOME_PAGE,
    });
  } catch (e) {
    handleError(e);
  }
};
