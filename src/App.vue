<template>
  <SquareComponent v-for="square in squaresList" :item="square" :key="square.id" />
<!--  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">-->
<!--    <line v-for="line in linesList" :key="line.uuid" :x1="line.x1" :y1="line.y1" :x2="line.x2" :y2="line.y2" stroke="black" stroke-width="0.2" />-->
<!--  </svg>-->
<!--  <button  class="button" @mousemove="click">click</button>-->
<!--  {{squaresList}}-->
  <button @click="createSquare">createSquare</button>
</template>

<script lang="ts" setup>
import SquareComponent from "@/components/SquareComponent.vue";
import {Square} from "@/models/Square";

const positionRandomizer = () => Math.round(Math.random())

import {ref} from 'vue'

const squaresList = ref<Square[]>([])

const createSquare = () => {
  const newSquare = new Square(positionRandomizer(), positionRandomizer())
  squaresList.value.push(newSquare)
}
</script>

<style>
.button {
  position: absolute;
  top: 0;
  left: 100px;
}
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

