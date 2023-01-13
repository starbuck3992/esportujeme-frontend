<template>
 <BracketComponent></BracketComponent>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive} from 'vue';
import BracketComponent from '@/components/tournament/BracketComponent.vue';
import Api from '@/services/api';
import {handleError} from '@/utilities/handleError';

interface Tournament {
  email: string,
  nickname: string
  suffix: number,
  about: string,
  avatar: string,
  avatarFile: File | null,
  name: string,
  surname: string,
}

export default defineComponent({
  components: {
    BracketComponent,
  },
  setup() {
    const tournament = reactive({
      'name': null,
      'platform': null,
      'game': null,
      'information': null,
      'tournamentType': {
        'name': null,
        'maxPlayers': null,
      },
      'tournamentStatus': {
        'name': null,
      },
      'fee': null,
      'currency': {
        'code': null,
      },
      'scheduleStart': null,
      'scheduleEnd': null,
      'registeredCount': 0,
      'tournamentMatches': [{
        userHome: {
          nick: null,
          avatar: null,
          playstationProfile: null,
          xboxProfile: null,
        },
        userGuest: {
          nick: null,
          avatar: null,
          playstationProfile: null,
          xboxProfile: null,
        },
        bracketPosition: null,
        scoreHome: null,
        scoreGuest: null,
      }],
    });

    onMounted(async () => {
      isInitialized.value = false;
      await loadData();
      isInitialized.value = true;
    });

    async function loadData() {
      try {
        const response = await Api.userSettings();
        Object.assign(formData, response.data);
        Object.assign(originalData, response.data);
      } catch (e) {
        handleError(e);
      }
    }

    return {
    };
  },
});
</script>
