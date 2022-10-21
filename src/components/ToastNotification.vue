<template>
  <div class="z-50 pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6">
    <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
      <transition enter-active-class="transform ease-out duration-300 transition" enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2" enter-to-class="translate-y-0 opacity-100 sm:translate-x-0" leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <div
          class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"
          :class="notificationClass">
          <div class="p-4">
            <div class="flex items-start">
              <p class="text-sm font-medium">{{notificationStore.message}}</p>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>


<script>
import {computed, defineComponent, onMounted} from 'vue';
import {NotificationEnum} from '@/enums/NotificationEnum';
import {useNotificationStore} from '@/stores/notification';

export default defineComponent({
  setup() {
    const notificationStore = useNotificationStore();
    const notificationClass = computed( () => {
      let cssClass = '';
      switch (notificationStore.type) {
        case (NotificationEnum.INFORMATION):
          cssClass = 'bg-white-500';
          break;

        case (NotificationEnum.SUCCESS):
          cssClass = 'bg-green-500';
          break;

        case (NotificationEnum.ERROR):
          cssClass = 'bg-red-500';
          break;
      }
      return cssClass;
    });

    onMounted(() => {
      setTimeout(() => {
        notificationStore.clearNotification();
      }, 4000);
    });

    return {
      NotificationEnum,
      notificationStore,
      notificationClass,
    };
  },
});
</script>
