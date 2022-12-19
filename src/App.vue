<template>
  <SquareComponent
      v-for="square in squaresList"
      :item="square"
      :key="square.id"
      @setActiveCircle="setActiveCircle"
  />
  <svg class="view-box" :viewBox="viewBox.join(' ')" xmlns="http://www.w3.org/2000/svg">
    <LineComponent v-for="line in linesList" :viewBox="viewBox" :key="line.id" :item="line"></LineComponent>
  </svg>
  <button class="create-button" @click="createSquare">createSquare</button>
</template>

<script lang="ts" setup>
import LineComponent from "@/components/LineComponent.vue";
import {uuid} from "vue-uuid";
import SquareComponent from "@/components/SquareComponent.vue";
import {Square} from "@/models/Square";
import {ref, provide} from 'vue'
import {Line} from "@/models/Line";

const viewBox = [0, 0, 100,100]

const positionRandomizer = (max: number): number => Math.floor(Math.random() * max)

const squaresList = ref<Square[]>([])

const createSquare = (): void => {
  const newSquare = new Square(positionRandomizer(window.innerWidth), positionRandomizer(window.innerHeight))
  squaresList.value.push(newSquare)
}

const linesList = ref<Line[]>([])
const lineId = ref()
const setActiveCircle = (x: number, y: number) => {
  if(!lineId.value) {
    lineId.value = uuid.v4()
    const newLine = new Line(lineId.value, x, y, null, null )
    linesList.value.push(newLine)
    return newLine
  } else {
    const line = linesList.value.find((el) => el.id === lineId.value)
    lineId.value = null
    if(line) {
      line.x2 = x
      line.y2 = y
      return line
    }
  }
}
provide('setActiveCircle', setActiveCircle)

</script>

<style>
.create-button {
  position: absolute;
  top: 0;
  right: 0;
}

body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #f0f0f0;
}

.view-box {
  /*position: absolute;*/
  /*top: 0;*/
  /*left: 0;*/
}
</style>

