<script setup>
import { store } from '@/store/store.js'
</script>

<template>
  <div>
    <v-hover v-slot="{ hover }">
      <v-img 
        width="100"
        :src="imgUrl()"
      >
          <v-icon
            dark
            color="white"
            v-if="hover"
            @click="reroll()">
            mdi-refresh
          </v-icon>
      </v-img>
    </v-hover>

    <div class="mt-2 text-center blue-grey--text text--lighten-5">
      {{ character.name }}
    </div>

  </div>
</template>

<script>
export default {
  props: {
    team: {
      type: Number,
      required: true
    },
    position: {
      type: Number,
      required: true
    },
    character: {
      type: Object,
      required: true
    }
  },

  methods: {
    reroll() {
      store.singleRoll(this.team, this.position)
    },

    imgUrl() {
      return require(`@/assets/units/${this.character.img}`)
    }
  }
}
</script>