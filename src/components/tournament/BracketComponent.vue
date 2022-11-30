<template>
  <div class="grid grid-cols-3">
    <div>
      <div class="text-center">
      <h1 class="text-white text-lg font-bold">Quarter Finals</h1>
        <h2 class="text-gray">4 matches</h2>
      </div>
      <div class="content-center">
  <MatchComponent :team-one="{name: 'test1', image: 'favicon.ico', score: 0}"
                  :team-two="{name: 'test2', image: 'favicon.ico', score: 1}">
                  </MatchComponent>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import MatchComponent from '@/components/tournament/MatchComponent.vue';

export default defineComponent({
  components: {
    MatchComponent,
  },
  setup() {
    return {
    };
  },
});
</script>
