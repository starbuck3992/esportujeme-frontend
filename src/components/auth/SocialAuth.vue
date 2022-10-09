<template>
  <div class="mt-2 flex flex-col">
    <a @click="socialAuth(ProviderEnum.GOOGLE)" href="#"
            class="w-full inline-flex justify-center md:justify-start py-2 bg-gray-600 shadow-sm bg-white text-sm font-medium text-white font-bold hover:bg-gray-700 mb-2">
      <div class="rounded bg-white p-2 md:ml-6">
        <img class="w-8 h-8" src="@/assets/images/socials/google.svg" alt="google_logo">
      </div>
      <span class="pl-2 my-auto">Pokračovat přes Google</span>
    </a>
    <a @click="socialAuth(ProviderEnum.FACEBOOK)" href="#"
            class="pointer-events-auto w-full inline-flex md:justify-start justify-center py-2 bg-gray-600 shadow-sm bg-white text-sm font-medium text-white font-bold hover:bg-gray-700 mb-2">
      <div class="rounded bg-white p-2 md:ml-6">
        <img class="w-8 h-8" src="@/assets/images/socials/facebook.svg" alt="facebook_logo">
      </div>
      <span class="pl-2 my-auto">Pokračovat přes Facebook</span>
    </a>
    <a @click="socialAuth(ProviderEnum.DISCORD)" href="#"
            class="w-full inline-flex justify-center md:justify-start py-2 bg-gray-600 shadow-sm bg-white text-sm font-medium text-white font-bold hover:bg-gray-700 mb-2">
      <div class="rounded bg-white p-2 md:ml-6">
        <img class="w-8 h-8" src="@/assets/images/socials/discord.svg" alt="discord_logo">
      </div>
      <span class="pl-2 my-auto">Pokračovat přes Discord</span>
    </a>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {ProviderEnum} from '@/enums/ProviderEnum';
import Api from '@/services/api';
import {handleError} from '@/utilities/handleError';

export default defineComponent({
  setup() {
    async function socialAuth(provider: ProviderEnum) {
      try {
        await Api.sanctumCookie();
        const response = await Api.socialAuthentication(provider);
        window.location.href = response?.data.url;
      } catch (e) {
        handleError(e);
      }
    }

    return {
      ProviderEnum,
      socialAuth,
    };
  },
});
</script>
