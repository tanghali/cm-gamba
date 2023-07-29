<script setup>
import { store } from '@/store/store.js'
</script>

<template>
  <v-card
    color="#778da9"
    width="520px"
  >
    <v-card-title>
      <div class="title-text text-center blue-grey--text text--lighten-4">
        Gamba Roll
      </div>
    </v-card-title>
    <v-card-text>

      <v-row class="team-title-text ml-1 mt-2">
        Team 1
      </v-row>
      <v-row>
        <v-col v-for="(character, index) in store.team1" :key="index" cols="3">
          <GambaSlot :team="1" :position="index" :character="character" />
        </v-col>
      </v-row>

      <v-row class="team-title-text ml-1 mt-2">
        Team 2
      </v-row>
      <v-row>
        <v-col v-for="(character, index) in store.team2" :key="index" cols="3">
          <GambaSlot :team="2" :position="index" :character="character" />
        </v-col>
      </v-row>
    
      <div class="counter text-right blue-grey--text text--darken-1">
        discord.gg/childe {{ store.rollCount }}
      </div>
    </v-card-text>


  </v-card>
</template>

<script>
import GambaSlot from './GambaSlot'

export default {
  components: {
    GambaSlot
  },

  methods: {
  }
}
</script>

<style scoped>
.counter {
  font-size: 9px;
}

.title-text {
  font-size: 33px;
  font-weight: bold;
  width: 500px;
}

.team-title-text {
  font-size: 16px;
  font-weight: bold;
  width: 500px;  
}
</style>