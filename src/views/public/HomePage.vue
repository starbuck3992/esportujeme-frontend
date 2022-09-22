<template>
  <div class="max-w-[100rem] grid md:grid-cols-2 xl:grid-cols-3 mx-auto m-10 p-10">
    <div class="col-span-1">
      <p class="tracking-widest uppercase font-semibold text-white ml-0 mb-5">Esportujeme.cz</p>
      <h1 class="text-8xl font-bold text-white mb-10">Úvodní popisek našeho projektu</h1>
      <button type="button" class="flex items-center bg-[#ff8503] hover:bg-[#212529] polygon text-white cursor-pointer uppercase px-20 py-5 text-center align-middle relative font-semibold ease-in-out duration-300">
        <a>Připojit se</a>
      </button>
    </div>
    <div class="col-span-1 xl:col-span-2 m-auto">
      <img class="object-cover w-full" src="https://www.challengermode.com/_arenablob/20220921.51/Content/img/portal/landing/220517/b37d73facfbc02c00833015d623d260a.png" />
    </div>
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

