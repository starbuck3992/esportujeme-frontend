<template>
  <div v-if="registrationSuccessful" class="mt-6 text-center">
    Úspěšně jsi se registroval. Pro dokončení registrace si ověr svůj email.
  </div>
  <div v-else>
    <h1 class="font-bold text-3xl text-center">Registrace</h1>
    <div class="text-center mt-4 mb-8">Již máš účet?
      <button class="text-blue-500" @click="modalChange(ModalEnum.LOGIN)">Přihlaš se</button>
    </div>
    <SocialAuth></SocialAuth>
    <div class="text-white text-center text-sm my-4">Nebo</div>
    <form @submit.prevent="register()" class="space-y-6">
      <div class="space-y-1">
        <label for="email" class="block text-sm">Email</label>
        <div class="relative mt-1 rounded-md">
          <input v-model="user.email" placeholder="Email" id="email" name="email" type="email"
                 autocomplete="email"
                 class="text-black block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"/>
          <div v-if="v$.email.$errors.length !== 0"
               class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ExclamationCircleIcon class="h-5 w-5 text-red-500"/>
          </div>
        </div>
        <ul v-for="error of v$.email.$errors" :key="error.$uid" class="font-xs text-red-400">
          <li>{{ error.$message }}</li>
        </ul>
      </div>
      <div class="space-y-1">
        <label for="nickname" class="block text-sm">Uživatelské jméno</label>
        <div class="relative mt-1 rounded-md">
          <input v-model="user.nickname" placeholder="Uživatelské jméno" id="nickname" name="nickname" type="text"
                 autocomplete="nickname"
                 class="text-black block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"/>
          <div v-if="v$.nickname.$errors.length !== 0"
               class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ExclamationCircleIcon class="h-5 w-5 text-red-500"/>
          </div>
        </div>
        <ul v-for="error of v$.nickname.$errors" :key="error.$uid" class="font-xs text-red-400">
          <li>{{ error.$message }}</li>
        </ul>
      </div>
      <div class="space-y-1">
        <label for="password" class="block text-sm">Heslo</label>
        <div class="relative mt-1 rounded-md">
          <input v-model="user.password" placeholder="Heslo" id="password" name="password" type="password"
                 autocomplete="new-password"
                 class="text-black block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"/>
          <div v-if="v$.password.$errors.length !== 0"
               class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ExclamationCircleIcon class="h-5 w-5 text-red-500"/>
          </div>
        </div>
        <ul v-for="error of v$.password.$errors" :key="error.$uid" class="font-xs text-red-400">
          <li>{{ error.$message }}</li>
        </ul>
      </div>
      <div class="space-y-1">
        <label for="password" class="block text-sm">Heslo znovu</label>
        <div class="relative mt-1 rounded-md">
          <input v-model="user.password_confirmation" placeholder="Heslo znovu" id="password_repeat" name="password"
                 type="password" autocomplete="new-password"
                 class="text-black block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"/>
          <div v-if="v$.password_confirmation.$errors.length !== 0"
               class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ExclamationCircleIcon class="h-5 w-5 text-red-500"/>
          </div>
        </div>
        <ul v-for="error of v$.password_confirmation.$errors" :key="error.$uid" class="font-xs text-red-400">
          <li>{{ error.$message }}</li>
        </ul>
      </div>
      <div class="text-center font-xs text-red-400">{{ error }}</div>
      <div>
        <button type="submit"
                class="mb-8 mt-12 flex w-full justify-center rounded-full border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Registrovat
        </button>
      </div>
    </form>
  </div>
</template>


<script lang="ts">
import {ExclamationCircleIcon} from '@heroicons/vue/20/solid';
import {useVuelidate} from '@vuelidate/core';
import {required, email, maxLength, alphaNum, minLength, sameAs} from '@vuelidate/validators';
import {defineComponent, reactive, computed, ref} from 'vue';
import SocialAuth from '@/components/auth/SocialAuth.vue';
import {ModalEnum} from '@/enums/ModalEnum';
import Api from '@/services/api';
import {useLoadingStore} from '@/stores/loading';
import {useUserStore} from '@/stores/user';
import {handleError} from '@/utilities/handleError';

export default defineComponent({
  components: {
    ExclamationCircleIcon,
    SocialAuth,
  },
  emits: ['onFinished', 'onModalChange'],
  setup(props, {emit}) {
    const loadingStore = useLoadingStore();
    const userStore = useUserStore();
    const registrationSuccessful = ref<boolean>();
    const error = ref<string>();

    const user = reactive({
      email: 'mcvespr@gmail.com',
      nickname: 'Starbuck',
      password: 'mcvespr@gmail.com',
      password_confirmation: 'mcvespr@gmail.com',
    });

    const rules = computed(() => ({
      email: {
        required,
        email,
      },
      nickname: {
        required,
        maxLengthValue: maxLength(32),
        alphaNum,
      },
      password: {
        required,
        minLengthValue: minLength(8),
      },
      password_confirmation: {
        required,
        sameAsPassword: sameAs(user.password),
      },
    }));

    const v$ = useVuelidate(rules, user);

    function modalChange(modalType: ModalEnum) {
      emit('onModalChange', modalType);
    }

    async function register() {
      loadingStore.updateLoading();
      error.value = '';
      try {
        if (await v$.value.$validate()) {
          await Api.sanctumCookie();
          const response = await Api.register(user);
          userStore.updateUser(response);
          registrationSuccessful.value = true;
        }
      } catch (e: any) {
        error.value = handleError(e);
      } finally {
        loadingStore.updateLoading();
      }
    }

    return {
      error,
      user,
      v$,
      ModalEnum,
      registrationSuccessful,
      modalChange,
      register,
    };
  },
});
</script>
