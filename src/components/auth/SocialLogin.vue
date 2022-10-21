<template>
  <div class="flex flex-row justify-center text-center w-full">
    <h1 class="text-3xl text-white text-center mt-4">Probíhá přihlašování, počkejte chvíli...</h1>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, PropType} from 'vue';
import {useRoute} from 'vue-router';
import {ProviderEnum} from '@/enums/ProviderEnum';
import Api from '@/services/api';
import {useUserStore} from '@/stores/user';
import {handleError} from '@/utilities/handleError';

export default defineComponent({
  props: {
    provider: {
      type: String as PropType<ProviderEnum>,
      required: true,
    },
  },
  setup(props) {
    const userStore = useUserStore();
    const route = useRoute();
    const payload = {
      provider: props.provider,
      parameters: {
        state: route.query.state as string,
        code: route.query.code as string,
      },
    };
    onMounted(async () => {
      try {
        await Api.sanctumCookie();
        const response = await Api.socialLogin(payload);
        userStore.updateUser(response.data);
        window.location.href = response.data.meta.url;
      } catch (e) {
        handleError(e);
      }
    });

    return {
      ProviderEnum,
    };
  },
});
</script>

