<template>
  <div class="relative w-full h-full max-w-[100rem] mx-auto px-5">
    <div class="bg-transparent pt-16 lg:py-24">
      <div class="bg-[#1f1f28] border-gray-800 border pb-16 lg:relative lg:z-10 lg:pb-0 rounded-lg">
        <div class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
          <div class="relative lg:-my-8">
            <div aria-hidden="true" class="absolute inset-x-0 top-0 h-1/2 bg-gray-900 lg:hidden rounded-lg" />
            <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:h-full lg:p-0">
              <div class="aspect-w-10 aspect-h-6 overflow-hidden rounded-xl shadow-xl sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                <img class="object-cover lg:h-full lg:w-full" src="@/assets/images/fifa.jpg" alt="" />
              </div>
            </div>
          </div>
          <div class="mt-12 lg:col-span-2 lg:m-0 lg:pl-8">
            <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
              <blockquote>
                <div>
                  <svg class="h-12 w-12 text-[#ff8503] opacity-100" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p class="mt-6 text-2xl font-medium text-white font-oswald">Připoje se do Turnaje FIFA 23 a soutěž s námi o skvělé ceny!</p>
                </div>
                <footer class="mt-6">
                  <button type="button"
                    class="mx-auto md:mx-0 flex items-center bg-[#ff8503] hover:bg-[#212529] polygon text-white cursor-pointer uppercase px-20 py-5 text-center align-middle relative font-semibold ease-in-out duration-300 font-oswald">
                    <a>Připojit se</a>
                  </button>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="my-5">
    <h3 class="font-medium text-5xl text-white font-oswald mb-5">Odměny za umístění:</h3>
    <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
      <div v-for="item in rewards" :key="item.title" class="overflow-hidden rounded-lg bg-[#1f1f28] px-4 py-5 shadow sm:p-5">
        <dt class="text-3xl font-bold text-[#ff8503] text-center mb-5">
          <svg :class="['inline-block h-10 w-10 my-auto align-middle mr-2',item.color]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
          </svg>
          <span class="inline-block my-auto align-middle font-oswald">{{ item.title }}</span>
        </dt>
        <img class="rounded-lg pb-5" src="@/assets/images/xboxController.jpg" alt="" />
      </div>
    </dl>
  </div>
  </div>
</template>
<script>
import {defineComponent} from 'vue';
export default defineComponent({
  setup() {
    const rewards = [
      {title: 'První Místo', color: 'text-[#C9B037]', source: '@/assets/images/xboxController.jpg'},
      {title: 'Druhé Místo', color: 'text-[#B4B4B4]', source: '@/assets/images/xboxController.jpg'},
      {title: 'Třetí Místo', color: 'text-[#AD8A56]', source: '@/assets/images/xboxController.jpg'},
    ];
    return {
      rewards,
    };
  },
});
</script>
