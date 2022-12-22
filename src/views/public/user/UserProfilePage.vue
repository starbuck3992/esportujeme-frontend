<template>
      <div class="px-4 py-6 lg:pb-16">
        <div class="overflow-hidden rounded-lg bg-white shadow">
          <div class="flex flex-col divide-y divide-gray-200 lg:divide-y-0 lg:divide-x">
            <form v-if="isInitialized" class="divide-y divide-gray-200">
              <div class="py-6 px-4 sm:p-6 lg:pb-8">
                <div>
                  <h2 class="text-lg font-medium leading-6 text-gray-900">Profil</h2>
                  <p class="mt-1 text-sm text-gray-500">Tyto informace budou veřejně viditelné.</p>
                </div>

                <div class="mt-6 flex flex-col lg:flex-row">
                  <div class="flex-grow space-y-6">
                    <div>
                      <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                      <div class="mt-1 flex rounded-md shadow-sm">
                        <input readonly :value="formData.email" type="email" name="email" id="profileEmail" class="block w-full min-w-0 flex-grow rounded-none rounded-l-md border-gray-300 focus:border-[#ff8503] sm:text-sm" />
                      </div>
                    </div>

                    <div>
                      <label for="username" class="block text-sm font-medium text-gray-700">Uživatelské jméno</label>
                      <div class="mt-1 flex rounded-md shadow-sm">
                        <input v-model="formData.nickname" type="text" name="username" id="username" autocomplete="username" class="block w-full min-w-0 flex-grow rounded-none rounded-l-md border-gray-300 focus:border-[#ff8503] sm:text-sm" />
                        <span class="inline-flex items-center rounded-r-md border border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">{{formData.suffix}}</span>
                      </div>
                    </div>

                    <div>
                      <label for="about" class="block text-sm font-medium text-gray-700">O mě</label>
                      <div class="mt-1">
                        <textarea v-model="formData.about" id="about" name="about" rows="3" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm" />
                      </div>
                      <p class="mt-2 text-sm text-gray-500">Řekni o sobě něco</p>
                    </div>
                  </div>

                  <div class="mt-6 flex-grow lg:mt-0 lg:ml-6 lg:flex-shrink-0 lg:flex-grow-0">
                    <p class="text-sm font-medium text-gray-700" aria-hidden="true">Avatar</p>
                    <div class="mt-1 lg:hidden">
                      <div class="flex items-center">
                        <div class="inline-block h-12 w-12 flex-shrink-0 overflow-hidden rounded-full" aria-hidden="true">
                          <img v-if="formData.avatar" class="h-full w-full rounded-full" :src="formData.avatar" alt="" />
                          <UserIcon v-else class="w-48 h-48"></UserIcon>
                        </div>
                        <div class="ml-5 rounded-md shadow-sm">
                          <div class="group relative flex items-center justify-center rounded-md border border-gray-300 py-2 px-3 focus-within:ring-2 focus-within:ring-sky-500 focus-within:ring-offset-2 hover:bg-gray-50">
                            <label for="mobile-user-avatar" class="pointer-events-none relative text-sm font-medium leading-4 text-gray-700">
                              <span>Změnit</span>
                            </label>
                            <input @change="handleAvatar" accept="image/png, image/jpeg, image/jpg" id="mobile-user-avatar" name="user-photo" type="file" class="absolute h-full w-full cursor-pointer rounded-md border-gray-300 opacity-0" />
                          </div>
                        </div>
                      </div>
                      <p class="mt-2 text-sm text-gray-500">Obrázek maximálně o velikosti 1MB</p>
                      <div v-if="v$.avatarFile.$error" class="font-xs text-red-400 max-w-2">
                        {{ v$.avatarFile.isFileValid.$params.message }}
                      </div>
                    </div>


                    <div class="relative hidden overflow-hidden rounded-full lg:block">
                      <img v-if="formData.avatar" class="relative h-40 w-40 rounded-full" :src="formData.avatar" alt="" />
                      <UserIcon v-else class="w-48 h-48"></UserIcon>
                      <label for="desktop-user-avatar" class="absolute inset-0 flex h-full w-full items-center justify-center bg-black bg-opacity-75 text-sm font-medium text-white opacity-0 focus-within:opacity-100 hover:opacity-100">
                        <span>Změnit</span>
                        <input @change="handleAvatar" accept="image/png, image/jpeg, image/jpg" type="file" id="desktop-user-avatar" name="user-photo" class="absolute inset-0 h-full w-full cursor-pointer rounded-md border-gray-300 opacity-0" />
                      </label>
                      <p class="mt-2 text-sm text-gray-500">Obrázek maximálně o velikosti 1MB</p>
                      <div v-if="v$.avatarFile.$error" class="font-xs text-red-400 max-w-2">
                        {{ v$.avatarFile.isFileValid.$params.message }}
                      </div>
                    </div>
                  </div>
                </div>

                <div class="mt-6 grid grid-cols-12 gap-6">
                  <div class="col-span-12 sm:col-span-6">
                    <ul v-for="error of v$.name.$errors" :key="error.$uid" class="font-xs text-red-400">
                      <li>{{ error.$message }}</li>
                    </ul>
                    <label for="first-name" class="block text-sm font-medium text-gray-700">Jméno</label>
                    <input v-model="formData.name" type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                  </div>

                  <div class="col-span-12 sm:col-span-6">
                    <ul v-for="error of v$.surname.$errors" :key="error.$uid" class="font-xs text-red-400">
                      <li>{{ error.$message }}</li>
                    </ul>
                    <label for="last-name" class="block text-sm font-medium text-gray-700">Příjmení</label>
                    <input v-model="formData.surname" type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                  </div>
                </div>
              </div>
              <div class="divide-y divide-gray-200 pt-6">
                <div class="text-center font-xs text-red-400">{{ error }}</div>
                <div class="mt-4 flex justify-end py-4 px-4 sm:px-6">
                  <button @click.prevent="resetForm" :disabled="!hasChanged" type="button" class="inline-flex justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2">Zrušit</button>
                  <button @click.prevent="updateProfile" :disabled="!hasChanged" type="submit" class="ml-5 inline-flex justify-center rounded-md border border-transparent bg-[#ff8503]  py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2">Uložit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
</template>

<script lang="ts">
import {UserIcon} from '@heroicons/vue/24/solid';
import {useVuelidate} from '@vuelidate/core';
import {alpha, alphaNum, maxLength} from '@vuelidate/validators';
import {isEqual} from 'lodash-es';
import {ref, defineComponent, onMounted, reactive, computed} from 'vue';
import {uploadImage} from '@/helpers/imageUploader';
import {isImageValid} from '@/helpers/imageValidator';
import Api from '@/services/api';
import {handleError} from '@/utilities/handleError';
import {handleSuccess} from '@/utilities/handleSuccess';

interface User {
  email: string,
  nickname: string
  suffix: number,
  about: string,
  avatar: string,
  avatarFile: File | null,
  name: string,
  surname: string,
}

export default defineComponent({
  components: {
    UserIcon,
  },
  setup() {
    const isInitialized = ref(false);

    const error = ref<string>();

    const originalData = reactive<User>({
      email: '',
      nickname: '',
      suffix: 0,
      about: '',
      avatarFile: null,
      avatar: '',
      name: '',
      surname: '',
    });

    const formData = reactive<User>({
      email: '',
      nickname: '',
      suffix: 0,
      about: '',
      avatarFile: null,
      avatar: '',
      name: '',
      surname: '',
    });

    const hasChanged = computed(()=> {
      return !isEqual(formData, originalData);
    });

    const rules = computed(() => ({
      nickname: {
        maxLengthValue: maxLength(32),
        alphaNum,
      },
      avatarFile: {
        isFileValid: isImageValid(),
      },
      about: {
        maxLengthValue: maxLength(255),
      },
      name: {
        maxLengthValue: maxLength(64),
        alpha,
      },
      surname: {
        maxLengthValue: maxLength(64),
        alpha,
      },
    }));

    const v$ = useVuelidate(rules, formData);

    onMounted(async () => {
      isInitialized.value = false;
      await loadData();
      isInitialized.value = true;
    });

    async function loadData() {
      try {
        const response = await Api.userSettings();
        Object.assign(formData, response.data.data);
        Object.assign(originalData, response.data.data);
      } catch (e) {
        handleError(e);
      }
    }

    async function handleAvatar(e) {
      const selectedFile = e.target.files[0] as File;

      if (selectedFile) {
        formData.avatarFile = selectedFile;
      }

      v$.value.avatarFile.$touch();

      if (v$.value.avatarFile.$error) {
        formData.avatar = originalData.avatar;
        return;
      }

      try {
        const response = await uploadImage(selectedFile);
        formData.avatar = response.data.url;
      } catch (e) {
        handleError(e);
      }
    }

    async function resetForm() {
      Object.assign(formData, originalData);
    }

    async function updateProfile() {
      error.value = '';
      try {
        const response = await Api.updateUserSettings({
          nickname: formData.nickname,
          about: formData.about,
          avatar: formData.avatar,
          name: formData.name,
          surname: formData.surname,
        });
        Object.assign(originalData, formData);
        handleSuccess(response.data.message);
      } catch (e: any) {
        error.value = handleError(e);
      }
    }

    return {
      error,
      v$,
      formData,
      hasChanged,
      isInitialized,
      resetForm,
      handleAvatar,
      updateProfile,
    };
  },
});
</script>
