<template>
  <button @click="logout" class="cursor-pointer">
    Odhlásit se
  </button>
</template>


<script lang="ts">
import {defineComponent} from 'vue';
import router from '@/router';
import {ROUTES} from '@/router/routes';
import Api from '@/services/api';
import {useUserStore} from '@/stores/user';
import {handleError} from '@/utilities/handleError';

export default defineComponent({
  setup() {
    const userStore = useUserStore();

    async function logout() {
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
    }

    return {
      logout,
    };
  },
});
</script>
