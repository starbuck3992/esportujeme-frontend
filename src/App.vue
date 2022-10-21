<template>
  <LoadingSpinner></LoadingSpinner>
    <component :is="layout">
      <router-view v-model:layout="layout"/>
    </component>
  <ToastNotification v-if="notificationStore.isNotificationSet"></ToastNotification>
</template>

<script lang="ts">
import {defineComponent, computed, markRaw} from 'vue';
import LoadingSpinner from '@/components/LoadingSpinner.vue';
import ToastNotification from '@/components/ToastNotification.vue';
import LayoutAdmin from '@/layout/LayoutAdmin.vue';
import {LayoutEnum} from '@/layout/LayoutEnum';
import LayoutPublic from '@/layout/LayoutPublic.vue';
import router from '@/router';
import {useNotificationStore} from '@/stores/notification';

export default defineComponent({
  components: {
    ToastNotification,
    LoadingSpinner,
  },
  setup() {
    const notificationStore = useNotificationStore();
    const layout = computed(() => {
      const layoutName = router.currentRoute.value.meta.layout;
      let layoutComponent;
      if (layoutName === LayoutEnum.ADMIN) {
        layoutComponent = LayoutAdmin;
      } else {
        layoutComponent = LayoutPublic;
      }
      return markRaw(layoutComponent);
    });

    return {
      notificationStore,
      layout,
    };
  },
});
</script>
