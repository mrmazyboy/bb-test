<template>
  <div ref="square" @mouseup="onMouseUp" @mousedown="onMouseDown($event)" @drag="onDrag" class="square">
    <CircleComponent
        v-for="child in childrens"
        :key="child.id"
    />
  </div>
</template>

<script lang="ts" setup>
import {Square} from "@/models/Square";
import CircleComponent from "@/components/CircleComponent.vue";
import {ref, defineProps, PropType, onMounted} from "vue";

const props = defineProps({
  item: {
    type: Object as PropType<Square>,
    required: true,
  }
})

onMounted(() => {
  props.item?.createCircles()
})

const square = ref()

const onMouseMove = (e: MouseEvent) => {
  moveAt(e);
}

const onMouseDown = (e: MouseEvent) => {
  moveAt(e);
  document.addEventListener('mousemove', onMouseMove)
}

const onMouseUp = () => {
  document.removeEventListener('mousemove', onMouseMove)
}

const moveAt = (e: MouseEvent) => {
  square.value.style.left = e.pageX - square.value?.offsetWidth / 2 + 'px';
  square.value.style.top = e.pageY - square.value.offsetHeight / 2 + 'px';
}

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