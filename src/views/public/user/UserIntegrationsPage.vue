<template>
  <ul>
    <li v-for="integration in integrations" :key="integration.id"></li>
  </ul>
</template>

<script lang="ts">
import {ref, defineComponent, onMounted} from 'vue';
import Api from '@/services/api';
import {handleError} from '@/utilities/handleError';

export default defineComponent({
  setup() {
    const isInitialized = ref(false);
    const integrations = ref([]);

    onMounted(async () => {
      isInitialized.value = false;
      await loadData();
      isInitialized.value = true;
    });

    async function loadData() {
      try {
        const response = await Api.userSettings();
        integrations.value = response.data.integrations;
      } catch (e) {
        handleError(e);
      }
    }
    return {
      integrations,
    };
  },
});
</script>
