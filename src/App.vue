<template>
  <SquareComponent v-for="item in arr" :key="item"></SquareComponent>
  <canvas id="canvas" :height="computedHeight" :width="computedWidth"></canvas>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SquareComponent from '@/components/SquareComponent.vue'

export default defineComponent({
  name: 'App',
  components: {
    SquareComponent
  },

  data() {
    return {
      arr: [1,2,3]
    }
  },

  computed: {
    computedHeight() {
      return window.innerHeight
    },

    computedWidth() {
      return window.innerWidth
    }

  }
});
</script>

<style>
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #f0f0f0;
}

#canvas {
  position: absolute;
  top: 0;
}
</style>

