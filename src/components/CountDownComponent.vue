<template>
    <div class="grid grid-cols-4 m-auto max-w-[25rem] sm:max-w-[40rem] lg:max-w-[80rem] px-3">
        <div class="flex items-center justify-center">
                <svg class="transform -rotate-90 w-64 h-64 hidden lg:block">
                    <circle cx="125" cy="125" r="100" stroke="currentColor" stroke-width="30" fill="transparent" class="text-gray-700"></circle>

                    <circle cx="125" cy="125" r="100" stroke="currentColor" stroke-width="30" fill="transparent" :stroke-dasharray="754.2857142857142" :stroke-dashoffset="2.06 * remainingDays" class="text-[#ff8503]"></circle>
                </svg>
                <span class="absolute text-5xl text-[#ff8503]">{{remainingDays}}</span>
        </div>
        <div class="flex items-center justify-center">
                <svg class="transform -rotate-90 w-64 h-64 hidden lg:block">
                    <circle cx="125" cy="125" r="100" stroke="currentColor" stroke-width="30" fill="transparent" class="text-gray-700"></circle>

                    <circle cx="125" cy="125" r="100" stroke="currentColor" stroke-width="30" fill="transparent" :stroke-dasharray="754.2857142857142" :stroke-dashoffset="31.42857142857143 * remainingHours" class="text-[#ff8503]"></circle>
                </svg>
                <span class="absolute text-5xl text-[#ff8503]">{{remainingHours}}</span>
        </div>
        <div class="flex items-center justify-center">
                <svg class="transform -rotate-90 w-64 h-64 hidden lg:block">
                    <circle cx="125" cy="125" r="100" stroke="currentColor" stroke-width="30" fill="transparent" class="text-gray-700"></circle>

                    <circle cx="125" cy="125" r="100" stroke="currentColor" stroke-width="30" fill="transparent" :stroke-dasharray="754.2857142857142" :stroke-dashoffset="12.57142857142857 * remainingMinutes" class="text-[#ff8503]"></circle>
                </svg>
                <span class="absolute text-5xl text-[#ff8503]" x-text="`70%`">{{remainingMinutes}}</span>
        </div>
        <div class="flex items-center justify-center">
                <svg class="transform -rotate-90 w-64 h-64 hidden lg:block">
                    <circle cx="125" cy="125" r="100" stroke="currentColor" stroke-width="30" fill="transparent" class="text-gray-700"></circle>

                    <circle cx="125" cy="125" r="100" stroke="currentColor" stroke-width="30" fill="transparent" :stroke-dasharray="754.2857142857142" :stroke-dashoffset="12.57142857142857 * remainingSeconds" class="text-[#ff8503]"></circle>
                </svg>
                <span class="absolute text-5xl text-[#ff8503]">{{remainingSeconds}}</span>
        </div>
    </div>
</template>
<script lang="ts">
import {defineComponent, ref, onMounted, onUnmounted} from 'vue';

export default defineComponent({
  setup() {
    // Resize circle SCG
    const r = ref();
    const cy = ref();
    const strokeWidth = ref();
    // Timer
    const countDownToTime = new Date('Sep 27, 2023 18:53:00').getTime();
    const remainingDays = ref<Number>(0);
    const remainingHours = ref<Number>(0);
    const remainingMinutes = ref<Number>(0);
    const remainingSeconds = ref<Number>(0);

    function startTimer() {
      const timeNow = new Date().getTime();
      const timeDifference = countDownToTime - timeNow;
      const millisecondsInOneSecond = 1000;
      const millisecondsInOneMinute = millisecondsInOneSecond * 60;
      const millisecondsInOneHour = millisecondsInOneMinute * 60;
      const millisecondsInOneDay = millisecondsInOneHour * 24;
      const differenceInDays = timeDifference / millisecondsInOneDay;
      const remainderDifferenceInHours = (timeDifference % millisecondsInOneDay) / millisecondsInOneHour;
      const remainderDifferenceInMinutes = (timeDifference % millisecondsInOneHour) / millisecondsInOneMinute;
      const remainderDifferenceInSeconds = (timeDifference % millisecondsInOneMinute) / millisecondsInOneSecond;
      remainingDays.value = Math.floor(differenceInDays);
      remainingHours.value = Math.floor(remainderDifferenceInHours);
      remainingMinutes.value = Math.floor(remainderDifferenceInMinutes);
      remainingSeconds.value =Math.floor(remainderDifferenceInSeconds);
      // timerOutput.value = remainingDays + ' Days ' + ': ' + remainingHours + ' Hours ' + ': ' + remainingMinutes + ' Minutes ' + ': ' + remainingSeconds + ' Seconds';
    }

    onMounted(() => {
      window.addEventListener('resize', onResize());
      setInterval(() => {
        startTimer();
      }, 1000);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', onResize());
    });

    function onResize() {
      const width = window.innerWidth;
      if (width < 640) {
        r.value = 30;
        cy.value = 75;
        strokeWidth.value = 10;
      } else if ( width > 640 && width < 768) { // sm
        r.value = 60;
        cy.value = 95;
        strokeWidth.value = 15;
      } else if (width > 768 && width < 1024) { // md
        r.value = 80;
        cy.value = 115;
        strokeWidth.value = 20;
      } else if (width > 1024 && width < 1280) { // lg
        r.value = 100;
        cy.value = 135;
        strokeWidth.value = 25;
      } else if (width > 1280) { // xl
        r.value = 120;
        cy.value = 145;
        strokeWidth.value = 30;
      }
    }
    return {
      remainingDays,
      remainingHours,
      remainingMinutes,
      remainingSeconds,
    };
  },
});
</script>
