<template>
  <div>
    <div class="relative overflow-hidden pb-32">
      <header class="relative py-10">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold text-white">Nastavení</h1>
        </div>
      </header>
    </div>

    <main class="relative -mt-32">
      <div class="mx-auto max-w-screen-xl px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16">
        <div class="overflow-hidden rounded-lg bg-white shadow">
          <div class="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x">
            <form class="divide-y divide-gray-200 lg:col-span-9" action="#" method="POST">
              <!-- Profile section -->
              <div class="py-6 px-4 sm:p-6 lg:pb-8">
                <div>
                  <h2 class="text-lg font-medium leading-6 text-gray-900">Profil</h2>
                  <p class="mt-1 text-sm text-gray-500">Tyto informace budou věřejně viditelné.</p>
                </div>

                <div class="mt-6 flex flex-col lg:flex-row">
                  <div class="flex-grow space-y-6">
                    <div>
                      <label for="username" class="block text-sm font-medium text-gray-700">Souč</label>
                      <div class="mt-1 flex rounded-md shadow-sm">
                        <span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">workcation.com/</span>
                        <input type="text" name="username" id="username" autocomplete="username" class="block w-full min-w-0 flex-grow rounded-none rounded-r-md border-gray-300 focus:border-sky-500 focus:ring-sky-500 sm:text-sm" :value="user.handle" />
                      </div>
                    </div>

                    <div>
                      <label for="about" class="block text-sm font-medium text-gray-700">O mě</label>
                      <div class="mt-1">
                        <textarea id="about" name="about" rows="3" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm" />
                      </div>
                      <p class="mt-2 text-sm text-gray-500">Řekni o sobě něco</p>
                    </div>
                  </div>

                  <div class="mt-6 flex-grow lg:mt-0 lg:ml-6 lg:flex-shrink-0 lg:flex-grow-0">
                    <p class="text-sm font-medium text-gray-700" aria-hidden="true">Avatar</p>
                    <div class="mt-1 lg:hidden">
                      <div class="flex items-center">
                        <div class="inline-block h-12 w-12 flex-shrink-0 overflow-hidden rounded-full" aria-hidden="true">
                          <img class="h-full w-full rounded-full" :src="user.imageUrl" alt="" />
                        </div>
                        <div class="ml-5 rounded-md shadow-sm">
                          <div class="group relative flex items-center justify-center rounded-md border border-gray-300 py-2 px-3 focus-within:ring-2 focus-within:ring-sky-500 focus-within:ring-offset-2 hover:bg-gray-50">
                            <label for="mobile-user-photo" class="pointer-events-none relative text-sm font-medium leading-4 text-gray-700">
                              <span>Změnit</span>
                            </label>
                            <input id="mobile-user-photo" name="user-photo" type="file" class="absolute h-full w-full cursor-pointer rounded-md border-gray-300 opacity-0" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="relative hidden overflow-hidden rounded-full lg:block">
                      <img class="relative h-40 w-40 rounded-full" :src="user.imageUrl" alt="" />
                      <label for="desktop-user-photo" class="absolute inset-0 flex h-full w-full items-center justify-center bg-black bg-opacity-75 text-sm font-medium text-white opacity-0 focus-within:opacity-100 hover:opacity-100">
                        <span>Změnit</span>
                        <input type="file" id="desktop-user-photo" name="user-photo" class="absolute inset-0 h-full w-full cursor-pointer rounded-md border-gray-300 opacity-0" />
                      </label>
                    </div>
                  </div>
                </div>

                <div class="mt-6 grid grid-cols-12 gap-6">
                  <div class="col-span-12 sm:col-span-6">
                    <label for="first-name" class="block text-sm font-medium text-gray-700">Jméno</label>
                    <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                  </div>

                  <div class="col-span-12 sm:col-span-6">
                    <label for="last-name" class="block text-sm font-medium text-gray-700">Příjmení</label>
                    <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                  </div>
                </div>
              </div>

              <!-- Privacy section -->
              <div class="divide-y divide-gray-200 pt-6">
                <div class="mt-4 flex justify-end py-4 px-4 sm:px-6">
                  <button type="button" class="inline-flex justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2">Cancel</button>
                  <button type="submit" class="ml-5 inline-flex justify-center rounded-md border border-transparent bg-sky-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2">Save</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import {
  KeyIcon,
  SquaresPlusIcon,
  UserCircleIcon,
} from '@heroicons/vue/24/outline';
import {defineComponent, onMounted, reactive} from 'vue';
import {useRoute} from 'vue-router';
import Api from '@/services/api';
import {useUserStore} from '@/stores/user';
import {handleError} from '@/utilities/handleError';

export default defineComponent({
  components: {
    KeyIcon,
    SquaresPlusIcon,
    UserCircleIcon,
  },
  setup() {
    const userStore = useUserStore();
    const route = useRoute();
    const user = reactive({
      nickname: '',
      about: '',
      avatar: '',
      name: '',
      surname: '',
    });


    onMounted(async () => {
      try {
        //user = await Api.userSettings();
      } catch (e) {
        handleError(e);
      }
    });

    return {
      user,
    };
  },
});
</script>
