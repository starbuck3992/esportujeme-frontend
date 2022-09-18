<template>
  <div class="flex flex-col">
    <MainMenu></MainMenu>
    <router-view></router-view>
    <MainFooter></MainFooter>
  </div>
</template>

<script>
import MainFooter from '@/components/MainFooter.vue';
import MainMenu from '@/components/MainMenu.vue';
export default {
  components: {
    MainMenu, MainFooter,
  },
};
</script>
