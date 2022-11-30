<template>
  <div class="bg-white rounded-2xl divide-y-2 px-2">
    <div class="flex justify-between py-4">
      <div class="flex flex-none">
      <img :src="teamOne.image" alt="" class="h-6 w-6 flex-shrink-0 rounded-full" />
      <span class="pl-2 font-semibold">{{ teamOne.name }}</span>
      </div>
      <span class="font-semibold">{{ teamOne.score }}</span>
    </div>
    <div class="flex justify-between py-4">
      <div class="flex flex-none">
      <img :src="teamOne.image" alt="" class="h-6 w-6 flex-shrink-0 rounded-full" />
      <span class="pl-2 font-semibold">{{ teamOne.name }}</span>
      </div>
      <span class="font-semibold">{{ teamOne.score }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';

interface Team {
  name: string,
  image: string,
  score: number
}

export default defineComponent({
  props: {
    teamOne: {
      type: Object as PropType<Team>,
      required: false,
      default: () => {},
    },
    teamTwo: {
      type: Object as PropType<Team>,
      required: false,
      default: () => {},
    },
  },
  setup() {
    return {
    };
  },
});
</script>
