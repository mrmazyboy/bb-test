<template>
  <div @mouseleave.stop="onMouseLeave" @mousedown.stop="onMouseDown" @mouseup="onMouseUp" :class="computedClasses" class="circle"/>
</template>

<script lang="ts">
import {defineComponent,PropType} from "vue";
import {ICircle} from "@/models/Circle";

export default defineComponent({
  props: {
    item: {
      required: true,
      type: Object as PropType<ICircle>
    },

    childIds: {
      required: true,
      type: Array as PropType<string[]>
    }
  },

  inject: ['activeCircles', 'handleCircleMouseDown', 'handleCircleMouseUp', 'handleCircleMouseOut', 'removeActiveCircle'],

  data() {
    return {
    }
  },

  mounted() {
  },

  watch: {
  },

  methods: {
    onMouseDown(): void {
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
    },

    onMouseUp(): void {
      // (this.handleCircleMouseUp as any)()
    },

    onMouseLeave(): void {
      // (this.handleCircleMouseOut as any)(this.item.uuid)
    }
  },

  computed: {
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
  },
})
</script>

<style scoped>

.circle {
  height: 20px;
  width: 20px;
  position: absolute;
  background-color: green;
  border-radius: 3px;
  border: 1px solid black;
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