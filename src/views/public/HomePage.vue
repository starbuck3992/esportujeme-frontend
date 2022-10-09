<template>
  <!-- HEADER -->
  <div class="max-w-[100rem] grid md:grid-cols-2 xl:grid-cols-3 mx-auto m-10 p-10">
    <div class="col-span-1 m-auto">
      <p class="tracking-widest uppercase font-semibold text-white ml-0 mb-5 font-oswald">Esportujeme.cz</p>
      <h1 :class="[
          'xl:text-8xl xl:leading-tight xl:tracking-tighter',
          'md:text-5xl md:leading-tight md:tracking-tight',
          'text-3xl font-bold text-white mb-10 font-oswald']">Připoj se a hrej o skvělé ceny</h1>
      <button type="button"
        class="mx-auto md:mx-0 flex items-center bg-[#ff8503] hover:bg-[#212529] polygon text-white cursor-pointer uppercase px-20 py-5 text-center align-middle relative font-semibold ease-in-out duration-300 font-oswald">
        <a>Připojit se</a>
      </button>
    </div>
    <div class="col-span-1 xl:col-span-2 m-auto mt-10 md:mt-0">
      <img class="object-cover w-full"
        src="https://www.challengermode.com/_arenablob/20220921.51/Content/img/portal/landing/220517/b37d73facfbc02c00833015d623d260a.png" />
    </div>
  </div>
  <!-- ALL GAMES TOURNAMETS -->
  <GameComponent/>
  <!-- Next tournament section -->
  <h1 :class="[
          'xl:text-8xl xl:leading-tight xl:tracking-tighter',
          'md:text-5xl md:leading-tight md:tracking-tight',
          'text-3xl font-bold text-white font-oswald',
          'mx-auto mt-10 mb-1 lg:mb-10']">
          Další turnaj startuje za:
  </h1>
  <NextTournament/>
</template>

<script>
import {defineComponent} from 'vue';
import GameComponent from '@/components/GameComponent.vue';
import NextTournament from '@/components/NextTournamentComponent.vue';
import {useMessageStore} from '@/stores/message';
export default defineComponent({
  components: {
    GameComponent, NextTournament,
  },
  setup() {
    const messageStore = useMessageStore();

    return {
      messageStore,
    };
  },
});
</script>
