<template>
  <div ref="square" :style="{left: positions.x + 'px', top: positions.y + 'px'}" @mouseup="onMouseUp" @mousedown="onMouseDown($event)" @drag="onDrag" class="square">
    <CircleComponent
        v-for="item in item.circles"
        :key="item.id"
        :item="item"
        :positions="positions"
        :squareSize="squareSize"
        :activeCircles="activeCircles"
        :isNeighboringCircleIsActive="isNeighboringCircleIsActive"
    />
  </div>
</template>

<script lang="ts" setup>
import {Square} from "@/models/Square";
import CircleComponent from "@/components/CircleComponent.vue";
import {ref, defineProps, PropType, onMounted, reactive, computed} from "vue";
import {Positions,SquareSize} from "@/models/Square";

const positions = reactive<Positions>({
  x: 0,
  y: 0,
})

const props = defineProps({
  item: {
    type: Object as PropType<Square>,
    required: true,
  },
  activeCircles: {
    type: Array as PropType<string[]>,
    required: true,
  }
})

onMounted(() => {
  props.item?.createCircles()
  positions.x = props.item.x
  positions.y = props.item.y
})

const isNeighboringCircleIsActive = computed(() => {
  return !!props.item?.circles.find((circle) => props.activeCircles.find((el) => circle.id === el))
})

const squareSize = computed((): SquareSize => {
  return {
    height: props.item?.height,
    width: props.item?.width,
  }
})

const square = ref()
const onMouseMove = (e: MouseEvent): void => {
  moveAt(e);
}
const onMouseDown = (e: MouseEvent): void => {
  moveAt(e);
  document.addEventListener('mousemove', onMouseMove)
}
const onMouseUp = (): void => {
  document.removeEventListener('mousemove', onMouseMove)
}
const moveAt = (e: MouseEvent): void => {
  positions.x = e.pageX - square.value?.offsetWidth / 2
  positions.y = e.pageY - square.value.offsetHeight / 2
}

</script>



<style>
.square {
  z-index: 1;
  position: absolute;
  width: 70px;
  height: 70px;
  background-color: #E5D9B6;
  border-radius: 10px;
  border: 1px solid #285430;
}
</style>