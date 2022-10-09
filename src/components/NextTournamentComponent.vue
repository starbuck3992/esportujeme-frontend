<template>
  <div class="relative w-full h-screen bg-gradient-to-t from-[#0b0c0e] to-gray-800">
    <div class="relative w-full h-full max-w-[100rem] mx-auto">
      <CountDown class="mx-auto block text-center mt-10"/>
    </div>
  </div>
</template>
<script>
import {defineComponent} from 'vue';
import CountDown from '@/components/CountDownComponent.vue';
export default defineComponent({
  components: {
    CountDown,
  },
  setup() {
    return {

    };
  },
});
</script>
