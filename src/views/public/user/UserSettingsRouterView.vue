<template>
  <div class="relative">
    <header class="relative py-10">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-white">Nastavení</h1>
      </div>
    </header>
  </div>
    <main class="relative">
      <div class="mx-auto max-w-screen-xl px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16">
        <div class="overflow-hidden rounded-lg bg-white shadow">
          <div class="divide-y divide-gray-200 lg:grid lg:grid-cols-4 lg:divide-y-0 lg:divide-x">
            <aside class="py-6 lg:col-span-1">
              <nav class="space-y-1">
                <router-link v-for="item in navigation" :key="item.name" :to="{name: item.href}"
                             :class="[item.current ? 'bg-teal-50 border-teal-500 text-teal-700 hover:bg-teal-50 hover:text-teal-700' : 'border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900', 'group border-l-4 px-3 py-2 flex items-center text-sm font-medium']"
                             :aria-current="item.current ? 'page' : undefined">
                  <component :is="item.icon"
                             :class="[item.current ? 'text-teal-500 group-hover:text-teal-500' : 'text-gray-400 group-hover:text-gray-500', 'flex-shrink-0 -ml-1 mr-3 h-6 w-6']"
                             aria-hidden="true"/>
                  <span class="truncate">{{ item.name }}</span>
                </router-link>
              </nav>
            </aside>
            <router-view class="lg:col-span-3"></router-view>
          </div>
        </div>
      </div>
    </main>
</template>


<script lang="ts">
import {KeyIcon, SquaresPlusIcon, UserCircleIcon} from '@heroicons/vue/24/outline';
import {
  defineComponent,
} from 'vue';
import {ROUTES} from '@/router/routes';

export default defineComponent({
  setup() {
    const navigation = [
      {name: 'Profil', href: ROUTES.USER_PROFILE_PAGE, icon: UserCircleIcon, current: true},
      {name: 'Heslo', href: ROUTES.USER_PASSWORD_PAGE, icon: KeyIcon, current: false},
      {name: 'Integrace', href: ROUTES.USER_INTEGRATIONS_PAGE, icon: SquaresPlusIcon, current: false},
    ];
    return {
      navigation,
    };
  },
});
</script>
