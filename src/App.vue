<script setup>
import { store } from '@/store/store.js'
</script>

<template>
  <v-app class="mainApp">
    <v-main class="mx-auto my-3">
      <div class="mx-auto">
        <GambaRollCard
          id="gambaCard"
          v-if="store.team1.length > 0"
        />
        <v-btn class="mt-3 mx-2" @click="store.fullRoll()">
          <v-icon>
            mdi-dice-3
          </v-icon>
          Reroll
        </v-btn>

        <v-btn class="mt-3 mx-2" @click="exportImage()">
          <v-icon>
            mdi-download
          </v-icon>
          Download Image
        </v-btn>
      </div>


      <div class="text-center blue-grey--text text--darken-1" v-if="displayInstructions">Right-click and save the image below.</div>
      <div id="downloadedImage">
      </div>
    </v-main>
  </v-app>
</template>

<script>
import domtoimage from 'dom-to-image-more'

import GambaRollCard from './components/GambaRollCard';

export default {
  name: 'App',

  data() {
    return {
      displayInstructions: false
    }
  },

  components: {
    GambaRollCard,
  },

  mounted() {
    store.initialize()
    store.fullRoll()
  },

  methods: {
    exportImage() {
      var node = document.getElementById('gambaCard');
      this.displayInstructions = true
      domtoimage
          .toPng(node)
          .then(function (dataUrl) {
              var img = new Image();
              img.src = dataUrl;

              let node = document.getElementById('downloadedImage')
              if (node.childElementCount > 0) {
                let c = node.firstChild
                c.replaceWith(img)
              } else {
                node.appendChild(img);
              }
          })
          .catch(function (error) {
              console.error('oops, something went wrong!', error);
          });
    }
  }
};
</script>

<style>
.mainApp {
  background-color: #1b263b !important;
}
</style>