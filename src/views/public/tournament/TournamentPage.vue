<template>
 <BracketComponent></BracketComponent>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import BracketComponent from '@/components/tournament/BracketComponent.vue';
export default defineComponent({
  components: {
    BracketComponent,
  },
  setup() {
    return {
    };
  },
});
</script>
