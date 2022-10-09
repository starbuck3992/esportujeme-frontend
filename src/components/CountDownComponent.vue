<template>
    <div class="grid grid-cols-4 mx-auto max-w-[100rem]">
        <div class="flex items-center justify-center">
                <svg class="transform -rotate-90 w-72 h-72">
                    <circle cx="145" cy="145" r="120" stroke="currentColor" stroke-width="30" fill="transparent" class="text-gray-700"></circle>

                    <circle cx="145" cy="145" r="120" stroke="currentColor" stroke-width="30" fill="transparent" :stroke-dasharray="754.2857142857142" :stroke-dashoffset="2.06 * remainingDays" class="text-[#ff8503]"></circle>
                </svg>
                <span class="absolute text-5xl">{{remainingDays}}</span>
        </div>
        <div class="flex items-center justify-center">
                <svg class="transform -rotate-90 w-72 h-72">
                    <circle cx="145" cy="145" r="120" stroke="currentColor" stroke-width="30" fill="transparent" class="text-gray-700"></circle>

                    <circle cx="145" cy="145" r="120" stroke="currentColor" stroke-width="30" fill="transparent" :stroke-dasharray="754.2857142857142" :stroke-dashoffset="31.42857142857143 * remainingHours" class="text-[#ff8503]"></circle>
                </svg>
                <span class="absolute text-5xl">{{remainingHours}}</span>
        </div>
        <div class="flex items-center justify-center">
                <svg class="transform -rotate-90 w-72 h-72">
                    <circle cx="145" cy="145" r="120" stroke="currentColor" stroke-width="30" fill="transparent" class="text-gray-700"></circle>

                    <circle cx="145" cy="145" r="120" stroke="currentColor" stroke-width="30" fill="transparent" :stroke-dasharray="754.2857142857142" :stroke-dashoffset="12.57142857142857 * remainingMinutes" class="text-[#ff8503]"></circle>
                </svg>
                <span class="absolute text-5xl text-[#ff8503]" x-text="`70%`">{{remainingMinutes}}</span>
        </div>
        <div class="flex items-center justify-center">
                <svg class="transform -rotate-90 w-72 h-72">
                    <circle cx="145" cy="145" r="120" stroke="currentColor" stroke-width="30" fill="transparent" class="text-gray-700"></circle>

                    <circle cx="145" cy="145" r="120" stroke="currentColor" stroke-width="30" fill="transparent" :stroke-dasharray="754.2857142857142" :stroke-dashoffset="12.57142857142857 * remainingSeconds" class="text-[#ff8503]"></circle>
                </svg>
                <span class="absolute text-5xl text-[#ff8503]">{{remainingSeconds}}</span>
        </div>
    </div>
</template>
<script>
import {defineComponent, ref, onMounted} from 'vue';

export default defineComponent({
  setup() {
    const countDownToTime = new Date('Sep 27, 2023 18:53:00').getTime();
    const remainingDays = ref(null);
    const remainingHours = ref(null);
    const remainingMinutes = ref(null);
    const remainingSeconds = ref(null);

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
      setInterval(() => {
        startTimer();
      }, 1000);
    });
    return {
      remainingDays,
      remainingHours,
      remainingMinutes,
      remainingSeconds,
    };
  },
});
</script>
