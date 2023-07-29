<script setup>
import { store } from '@/store/store.js'
</script>

<template>
  <v-app class="mainApp">
    <v-main class="mx-auto my-3">
      <GambaRollCard
        v-if="store.team1.length > 0"
      />
      <v-btn class="mt-3 mx-auto" @click="store.fullRoll()">
        <v-icon>
          mdi-dice-3
        </v-icon>
        Reroll
      </v-btn>
    </v-main>
  </v-app>
</template>

<script>
// import { store } from './store/store.js'

import GambaRollCard from './components/GambaRollCard';

export default {
  name: 'App',

  components: {
    GambaRollCard,
  },

  data: () => ({
    //
  }),

  mounted() {
    store.initialize()
    store.fullRoll()
  }
};
</script>

<style>
.mainApp {
  background-color: #1b263b !important;
}
</style>