<template>
  <SquareComponent
      v-for="square in squaresList"
      :item="square"
      :key="square.id"
      :activeCircles="activeCircles"
  />
  <svg class="view-box" :viewBox="viewBox.join(' ')" xmlns="http://www.w3.org/2000/svg">
    <LineComponent v-for="line in linesList" :viewBox="viewBox" :key="line.id" :item="line"></LineComponent>
  </svg>
  <div class="abs">
    <pre>{{activeCircles}}</pre>
    <pre>{{linesList}}</pre>
  </div>
  <button class="create-button" @click="createSquare">createSquare</button>
</template>

<script lang="ts" setup>
import LineComponent from "@/components/LineComponent.vue";
import {uuid} from "vue-uuid";
import SquareComponent from "@/components/SquareComponent.vue";
import {Square} from "@/models/Square";
import {ref, provide} from 'vue'
import {ILine, Line} from "@/models/Line";

const viewBox = [0, 0, 100,100]

const positionRandomizer = (max: number): number => Math.floor(Math.random() * max)

const squaresList = ref<Square[]>([])

const createSquare = (): void => {
  const newSquare = new Square(positionRandomizer(window.innerWidth), positionRandomizer(window.innerHeight))
  squaresList.value.push(newSquare)
}


const linesList = ref<Line[]>([])
const lineId = ref()
const activeCircles = ref<string[]>([])
const deleteLine = (line: Line) => {
  linesList.value = linesList.value.filter((el) => el.x1 !== line.x1 && el.y1 !== line.y1 && el.x2 === line.x2 && el.y2 !== line.y2)
}
const checkDuplicateLine = (line: ILine): boolean => {
  const duplicatedLinesList = []

  linesList.value.forEach((el) => {
    if(
      el.x1 === line.x1
      && el.y1 === line.y1
      && el.x2 === line.x2
      && el.y2 === line.y2
    ) {
      duplicatedLinesList.push(el)
    }
  })

  if(duplicatedLinesList.length > 1) {
    deleteLine(line)
    return true
  }
  return false

}
const setActiveCircle = (x: number, y: number, circleId: string) => {
  if(!lineId.value) {
    lineId.value = uuid.v4()
    const newLine = new Line(lineId.value, x, y, null, null )
    linesList.value.push(newLine)
    activeCircles.value.push(circleId)
    return newLine
  } else {

    const line = linesList.value.find((el) => el.id === lineId.value)

    activeCircles.value = []
    lineId.value = null
    if(line) {
      line.x2 = x
      line.y2 = y
      if(checkDuplicateLine(line)) {
        alert('НЕЗЯ ДУБЛИРОВАТЬ ЛИНИИ!')
        return
      }

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

.abs {
  position: absolute;
  top: 20px;
  left: 20px;
}
</style>

