<template>
  <div class="tournament-bracket flex flex-wrap justify-center space-x-[30px]">
    <div class="col">
        <div class="text-white text-lg font-bold">Quarter Finals</div>
        <div class="text-gray">4 matches</div>
        <ul class="matches">
          <li>
          <MatchComponent :team-one="{name: 'test1', image: 'favicon.ico', score: 0}"
                          :team-two="{name: 'test2', image: 'favicon.ico', score: 1}">
          </MatchComponent>
          </li>
          <li>
            <MatchComponent :team-one="{name: 'test1', image: 'favicon.ico', score: 0}"
                            :team-two="{name: 'test2', image: 'favicon.ico', score: 1}">
            </MatchComponent>
          </li>
          <li>
            <MatchComponent :team-one="{name: 'test1', image: 'favicon.ico', score: 0}"
                            :team-two="{name: 'test2', image: 'favicon.ico', score: 1}">
            </MatchComponent>
          </li>
          <li>
            <MatchComponent :team-one="{name: 'test1', image: 'favicon.ico', score: 0}"
                            :team-two="{name: 'test2', image: 'favicon.ico', score: 1}">
            </MatchComponent>
          </li>
        </ul>
      </div>
    <div class="col">
        <h1 class="text-white text-lg font-bold">Semi Finals</h1>
        <h2 class="text-gray">2 matches</h2>
        <ul class="matches">
          <li>
            <MatchComponent :team-one="{name: 'test1', image: 'favicon.ico', score: 0}"
                            :team-two="{name: 'test2', image: 'favicon.ico', score: 1}">
            </MatchComponent>
          </li>
          <li>
            <MatchComponent :team-one="{name: 'test1', image: 'favicon.ico', score: 0}"
                            :team-two="{name: 'test2', image: 'favicon.ico', score: 1}">
            </MatchComponent>
          </li>
        </ul>
      </div>
    <div class="col">
      <h1 class="text-white text-lg font-bold">Finals</h1>
      <h2 class="text-gray">1 match</h2>
      <ul class="matches">
        <li>
          <MatchComponent :team-one="{name: 'test1', image: 'favicon.ico', score: 0}"
                          :team-two="{name: 'test2', image: 'favicon.ico', score: 1}">
          </MatchComponent>
        </li>
      </ul>
    </div>
    </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import MatchComponent from '@/components/tournament/MatchComponent.vue';<

interface TournamentMatch {
  bracketPosition: number,
  scoreHome: number | null,
  scoreGuest: number | null,
  about: string,
  avatar: string,
  avatarFile: File | null,
  name: string,
  surname: string,
}

{
  "bracketPosition": 3,
  "scoreHome": 1,
  "scoreGuest": 5,
  "userHome": {
  "nick": null,
    "email": "user2@esportujeme.cz",
    "playstationProfile": null,
    "xboxProfile": null
},
  "userGuest": {
  "nick": null,
    "email": "user1@esportujeme.cz",
    "playstationProfile": null,
    "xboxProfile": null
},
  "screenshotHome": null,
  "screenshotGuest": {
  "path": "/storage/images/tournaments/vanocni-turnaj-2023/s7LCPHduAyD0V4G69pHLU3CcK50OzX4TuWO9eCIo.png"
}
}


export default defineComponent({
  components: {
    MatchComponent,
  },
  props: {
    matches: {
      type: Array as PropType<Array<TournamentMatch>>,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>

$antique-white: #f5eed5;
$text-color: #5a5a5a;
$text-color-light: lighten($text-color, 15%);
$text-color-xlight: lighten($text-color, 30%);

.tournament-bracket {
  text-align: center;

  .col {
    display: flex;
    flex-direction: column;
  }

  .phase-name {
    white-space: nowrap;
  }

  ul.matches {
    flex-grow: 1;
    margin-top: 1em;
    text-align: left;
    display: flex;
    flex-direction: column;
  }

  $col-horizontal-padding: 15px;
  $li-vertical-padding: 0.5em;
  $match-border-width: 2px;
  $link-border-radius: 10px;
  $link-width: $col-horizontal-padding + $match-border-width / 2;

  li {
    flex-grow: 1;
    padding: $li-vertical-padding 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
  }

  .match {
    padding: 0.5em;
    border: $match-border-width solid $text-color-light;
    border-radius: 3px;
    position: relative;
  }


  .col:not(:last-of-type) {
    li:nth-of-type(odd)::after {
      content: " ";
      display: block;
      width: $link-width;
      height: 41%;
      position: absolute;
      top: calc(50% + #{$match-border-width / 2});
      right: -$link-width;
      border-top: 2px solid $text-color-xlight;
      border-right: 2px solid $text-color-xlight;
      border-top-right-radius: $link-border-radius;
    }

    li:nth-of-type(even)::after {
      content: " ";
      display: block;
      width: $link-width;
      height: 41%;
      position: absolute;
      bottom: calc(50% - #{$match-border-width / 2});
      right: -$link-width;
      border-right: 2px solid $text-color-xlight;
      border-bottom: 2px solid $text-color-xlight;
      border-bottom-right-radius: $link-border-radius;
    }
  }

  .col:not(:first-of-type) {
    .match::before {
      content: " ";
      display: block;
      width: $link-width;
      height: 50%;
      position: absolute;
      top: $match-border-width / 2;
      left: -$link-width - $match-border-width;
      border-left: 2px solid $text-color-xlight;
      border-bottom: 2px solid $text-color-xlight;
      border-bottom-left-radius: $link-border-radius;
    }

    .match::after {
      content: " ";
      display: block;
      width: $link-width;
      height: 50%;
      position: absolute;
      bottom: $match-border-width / 2;
      left: -$link-width - $match-border-width;
      border-top: 2px solid $text-color-xlight;
      border-left: 2px solid $text-color-xlight;
      border-top-left-radius: $link-border-radius;
    }
  }
}

ul {
  list-style: none;
  padding-left: 0;
}
</style>
