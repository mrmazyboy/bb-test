<template>
  <div @mousedown="onMouseDown($event)" class="square">
    <CircleComponent :item="item" v-for="item in arr" :key="item.id"></CircleComponent>
  </div>
</template>

<script lang="ts">
import { uuid } from 'vue-uuid';
import {defineComponent} from "vue";
import CircleComponent from "@/components/CircleComponent.vue";
export default defineComponent({
  name: 'SquareComponent',
  components: {CircleComponent},

  data() {
    return {
      arr: [
        {
          position: 'top',
          id: uuid.v4()
        },
        {
          position: 'right',
          id: uuid.v4()
        },
        {
          position: 'bottom',
          id: uuid.v4()
        },
        {
          position: 'left',
          id: uuid.v4()
        },
      ]
    }
  },

  methods: {
    onMouseDown(e: MouseEvent) {
      const ball = this.$el

      function moveAt(e: MouseEvent) {
        ball.style.left = e.pageX - ball.offsetWidth / 2 + 'px';
        ball.style.top = e.pageY - ball.offsetHeight / 2 + 'px';
      }

      moveAt(e);

      document.onmousemove = function(e) {
        moveAt(e);
      }

      ball.onmouseup = function() {
        document.onmousemove = null;
        ball.onmouseup = null;
      }
    }
  }
})
</script>

<style>
.square {
  z-index: 1;
  position: absolute;
  width: 70px;
  height: 70px;
  background-color: cornflowerblue;
  border: 1px solid black;
  border-radius: 10px;
}
</style>