<script setup>
import { store } from '@/store/store.js'
</script>

<template>
  <v-card
    color="#778da9"
    width="520px"
  >
    <v-card-title>
      <div class="title text-center blue-grey--text text--lighten-4">
        <h2>Gamba Roll</h2>
      </div>
    </v-card-title>
    <v-card-text>
      <v-row class="ml-1">
        <h3>Team 1</h3>
      </v-row>
      <v-row>
        <v-col v-for="(character, index) in store.team1" :key="index" cols="3">
          <GambaSlot :team="1" :position="index" :character="character" />
        </v-col>
      </v-row>

      <v-row class="ml-1 mt-2">
        <h3>Team 2</h3>
      </v-row>
      <v-row>
        <v-col v-for="(character, index) in store.team2" :key="index" cols="3">
          <GambaSlot :team="2" :position="index" :character="character" />
        </v-col>
      </v-row>
    
      <div class="counter text-right blue-grey--text text--darken-1">
        {{ store.rollCount }}
      </div>
    </v-card-text>


  </v-card>
</template>

<script>
import GambaSlot from './GambaSlot'

export default {
  components: {
    GambaSlot
  }
}
</script>

<style scoped>
.counter {
  font-size: 9px;
}
</style>