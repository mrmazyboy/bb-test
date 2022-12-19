<template>
  <div :style="position" ref="circle" @mouseleave.stop="onMouseLeave" @mousedown.stop="onMouseDown" @mouseup="onMouseUp" class="circle"/>
</template>

<script lang="ts" setup>
import {computed, inject, defineProps, PropType, ref, watch} from "vue";
import {Circle} from "@/models/Circle";
import {Positions,SquareSize} from "@/models/Square";
import {ILine} from "@/models/Line";

// eslint-disable-next-line no-unused-vars
const setActiveCircle = inject('setActiveCircle', (x: number , y: number): any => {})

const props = defineProps({
  item: {
    type: Object as PropType<Circle>,
    required: true,
  },

  positions: {
    type: Object as PropType<Positions>,
    required: true
  },

  squareSize: {
    type: Object as PropType<SquareSize>,
    required: true
  }
})

const circle = ref()

type Position = {
  left: string,
  top: string,
}

const position = computed((): Position => {
  const squareWidth: number = props.squareSize?.width
  const squareHeight: number = props.squareSize?.height
  const circleWidth: number = circle.value?.offsetWidth
  const circleHeight: number = circle.value?.offsetHeight

  let result = {} as Position

  switch(props.item.position)
  {
    case 'top':
      result = {
        left: squareWidth / 2 - circleWidth / 2 + 'px',
        top: 0 - circleHeight / 2 + 'px',
      }
      break
    case 'right':
      result = {
        left: squareWidth - circleWidth / 2 + 'px',
        top: squareHeight / 2 - circleHeight / 2 + 'px',
      }
      break
    case 'bottom':
      result = {
        left: squareWidth / 2 - circleWidth / 2 + 'px',
        top: squareHeight - circleHeight / 2 + 'px',
      }
      break
    case 'left':
      result = {
        left: 0 - circleWidth / 2 + 'px',
        top: squareHeight / 2 - circleHeight / 2 + 'px',
      }
      break
    default:
      break;
  }

  return result
})

const linesStartForward = ref<ILine[]>([])
const linesEndForward = ref<ILine[]>([])

const onMouseDown = () => {

  const {x,y, height, width} = circle.value.getBoundingClientRect()
  const line = setActiveCircle( width / 2 + x, height / 2 + y)

  if(line?.x2 === null) {
    linesStartForward.value.push(line)
  } else {
    linesEndForward.value.push(line)
  }
}

const onMouseLeave = () => {
  console.log('leave')
}

const onMouseUp = () => {
  console.log('up')
}

watch(props.positions, () => {
  const {x, y, height, width} = circle.value.getBoundingClientRect()

  linesStartForward.value.forEach((el) => {
    el.x1 = width / 2 + x
    el.y1 = height / 2 + y
  })

  linesEndForward.value.forEach((el) => {
    el.x2 = width / 2 + x
    el.y2 = height / 2 + y
  })
})



  // methods: {
  //   onMouseDown(): void {
      // if(this.activeCirclesState.length === 1
      //   && this.activeCirclesState[0].uuid === this.item.uuid
      // ) {
      //   (this.removeActiveCircle as any)(this.item.uuid)
      //   return
      // }
      //
      // if(this.activeCirclesState.length === 1
      //   && this.activeCirclesState[0].uuid !== this.item.uuid
      //   && this.childIds.find(el => el === this.activeCirclesState[0].uuid)
      // ) {
      //   return
      // }
      //
      // let {x, y, height, width}: {x: number, y: number, height: number, width: number} = this.$el.getBoundingClientRect()
      //
      // x = x + (width / 2);
      // y = y + (height / 2);
      //
      // (this.handleCircleMouseDown as any)({...this.item, x: x, y: y})
    // },
  //
  //   onMouseUp(): void {
  //     // (this.handleCircleMouseUp as any)()
  //   },
  //
  //   onMouseLeave(): void {
  //     // (this.handleCircleMouseOut as any)(this.item.uuid)
  //   }
  // },

  // computed: {
    // computedClasses(): string[] {
    //   return [this.item.position, this.isActive ? 'active' : '']
    // },
    //
    // activeCirclesState() {
    //   return (this.activeCircles as any)()
    // },
    //
    // isActive(): boolean {
    //   return this.activeCirclesState.find((el: ICircle) => el.uuid === this.item.uuid)
    // },
  // },
// })
</script>

<style scoped>

.circle {
  height: 20px;
  width: 20px;
  position: absolute;
  background-color: green;
  border-radius: 3px;
}

.top {
  left: 25px;
  top: -10px
}

.right {
  left: 60px;
  top: 25px;
}

.bottom {
  left: 25px;
  top: 60px;
}

.left {
  left: -10px;
  top: 25px;
}

.active {
  background-color: red;
}
</style>