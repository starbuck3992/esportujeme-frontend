<template>
  <LoadingSpinner></LoadingSpinner>
    <component :is="layout">
      <router-view />
    </component>
  <ErrorMessage></ErrorMessage>
</template>

<script lang="ts">
import {defineComponent, computed, markRaw} from 'vue';
import ErrorMessage from '@/components/ErrorMessage.vue';
import LoadingSpinner from '@/components/LoadingSpinner.vue';
import LayoutAdmin from '@/layout/LayoutAdmin.vue';
import {LayoutEnum} from '@/layout/LayoutEnum';
import LayoutPublic from '@/layout/LayoutPublic.vue';
import router from '@/router';

export default defineComponent({
  components: {
    LoadingSpinner,
    ErrorMessage,
  },
  setup() {
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
      layout,
    };
  },
});
</script>
