<template>
  <line v-if="coordinates.x2" :x1="coordinates.x1" :y1="coordinates.y1" :x2="coordinates.x2" :y2="coordinates.y2" stroke="black" stroke-width="0.1" />
</template>

<script lang="ts" setup>
import {defineProps, PropType, computed} from "vue";
// import {ILine} from "@/models/Line";

const props = defineProps({
  item: {
    type: Object as PropType<any>
  },
  viewBox: {
    type: Object as PropType<number[]>
  }
})


const windowWidth: number = window.innerWidth
const windowHeight: number = document.getElementsByTagName('body')[0].offsetHeight
const coordinates = computed((): {x1: number, y1: number, x2: number, y2: number} => {
  const {x1, y1, x2, y2} = props.item

  return {
    x1: x1 / windowWidth * 100,
    y1: y1 / windowHeight * 100,
    x2: x2 / windowWidth * 100,
    y2: y2 / windowHeight * 100,
  }
})

console.log(coordinates)
</script>