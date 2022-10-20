<template>
  <div class="px-4 py-6 lg:pb-16">
    <div class="overflow-hidden rounded-lg bg-white shadow">
      <div class="flex flex-col divide-y divide-gray-200 lg:divide-y-0 lg:divide-x">
        <form class="divide-y divide-gray-200">
          <div class="py-6 px-4 sm:p-6 lg:pb-8">
            <div>
              <h2 class="text-lg font-medium leading-6 text-gray-900">Změna hesla</h2>
              <p class="mt-1 text-sm text-gray-500">Zde si můžeš změnit své heslo.</p>
            </div>
            <div class="mt-6 flex flex-col lg:flex-row">
              <div class="flex-grow space-y-3">
                <label for="current_password" class="block text-sm font-medium text-gray-700">Současné heslo</label>
                <ul v-for="error of v$.currentPassword.$errors" :key="error.$uid" class="font-xs text-red-400">
                  <li>{{ error.$message }}</li>
                </ul>
                <div class="relative mt-1 flex rounded-md shadow-sm">
                  <input v-model="user.currentPassword" type="password" name="current_password" id="current_password"
                         autocomplete="password"
                         class="block w-12 min-w-0 flex-grow rounded-none rounded-l-md border-gray-300 sm:text-sm"/>
                  <div v-if="v$.currentPassword.$errors.length !== 0"
                       class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <ExclamationCircleIcon class="h-5 w-5 text-red-500"/>
                  </div>
                </div>
                <label for="new_password" class="block text-sm font-medium text-gray-700">Nové heslo</label>
                <div class="relative mt-1 flex rounded-md shadow-sm">
                  <input v-model="user.password" type="password" name="new_password" id="new_password"
                         autocomplete="new-password"
                         class="block w-12 min-w-0 flex-grow rounded-none rounded-l-md border-gray-300 sm:text-sm"/>
                  <div v-if="v$.password.$errors.length !== 0"
                       class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <ExclamationCircleIcon class="h-5 w-5 text-red-500"/>
                  </div>
                </div>
                <ul v-for="error of v$.password.$errors" :key="error.$uid" class="font-xs text-red-400">
                  <li>{{ error.$message }}</li>
                </ul>
                <label for="username" class="block text-sm font-medium text-gray-700">Nové heslo znovu</label>
                <div class="relative mt-1 flex rounded-md shadow-sm">
                  <input v-model="user.passwordConfirm" type="password" name="new_password_repeat"
                         id="new_password_repeat" autocomplete="new-password"
                         class="block w-full min-w-0 flex-grow rounded-none rounded-l-md border-gray-300 sm:text-sm"/>
                  <div v-if="v$.passwordConfirm.$errors.length !== 0"
                       class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <ExclamationCircleIcon class="h-5 w-5 text-red-500"/>
                  </div>
                </div>
                <ul v-for="error of v$.passwordConfirm.$errors" :key="error.$uid" class="font-xs text-red-400">
                  <li>{{ error.$message }}</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="divide-y divide-gray-200 pt-6">
            <div class="text-center font-xs text-red-400">{{ error }}</div>
            <div class="mt-4 flex justify-end py-4 px-4 sm:px-6">
              <button @click.prevent="updatePassword" type="submit"
                      class="ml-5 inline-flex justify-center rounded-md border border-transparent bg-[#ff8503]  py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2">
                Uložit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {ExclamationCircleIcon} from '@heroicons/vue/20/solid';
import {useVuelidate} from '@vuelidate/core';
import {minLength, required, sameAs} from '@vuelidate/validators';
import {ref, defineComponent, reactive, computed} from 'vue';
import {useLogoutFlow} from '@/composables/useLogoutFlow';
import Api from '@/services/api';
import {handleError} from '@/utilities/handleError';
import {handleSuccess} from '@/utilities/handleSuccess';

export default defineComponent({
  components: {
    ExclamationCircleIcon,
  },
  setup() {
    const error = ref<string>();
    const user = reactive({
      currentPassword: '',
      password: '',
      passwordConfirm: '',
    });

    const rules = computed(() => ({
      currentPassword: {
        required,
      },
      password: {
        required,
        minLengthValue: minLength(8),
      },
      passwordConfirm: {
        required,
        sameAsPassword: sameAs(user.password),
      },
    }));

    const v$ = useVuelidate(rules, user);

    async function updatePassword() {
      error.value = '';
      try {
        if (await v$.value.$validate()) {
          const payload = {
            current_password: user.currentPassword,
            password: user.password,
            password_confirmation: user.passwordConfirm,
          };
          await Api.updatePassword(payload);

          handleSuccess('Heslo úspěšně změněno');

          await useLogoutFlow();
        }
      } catch (e: any) {
        error.value = handleError(e);
      }
    }

    return {
      v$,
      user,
      error,
      updatePassword,
    };
  },
});
</script>
