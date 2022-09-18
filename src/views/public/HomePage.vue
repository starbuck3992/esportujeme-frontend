<template>
 <div>
   <div class="text-red-500">Home</div>
   <button @click="messageStore.setMessage('test', 'test')">
     TEST
   </button>
 </div>
</template>

<script>
import {defineComponent} from 'vue';
import {useMessageStore} from '@/stores/message';

export default defineComponent({
  setup() {
    const messageStore = useMessageStore();

    return {
      messageStore,
    };
  },
});
</script>

