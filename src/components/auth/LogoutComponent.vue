<template>
  <button @click="logout" class="cursor-pointer">
    Odhlásit se
  </button>
</template>


<script lang="ts">
import {defineComponent} from 'vue';
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
