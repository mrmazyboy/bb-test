<template>
  <button
      :class="computedClasses"
      @mousedown.stop
      @click.stop="onClick"
      class="circle">
  </button>
</template>

<script>
import {defineComponent} from "vue";
import {activeButtons, setActiveButtons} from "@/composables/circles";

export default defineComponent({

  name: 'CircleComponent',
  props: ['item'],

  data() {
    return {
      connectedLinesIndexes: [],
      isActive: false,
    }
  },

  computed: {
    computedClasses() {
      const classes = []
      this.isButtonActive ? classes.push('active') : ''
      classes.push(this.item.position)
      return classes
    },

    isButtonActive() {
      return activeButtons.value.find((el) => el.buttonId === this.item.id)
    },
  },

  methods: {
    onClick(e) {
      const {x,y} = e.target.getBoundingClientRect()
      setActiveButtons(this.item.id, x + 10, y + 10)
    },

  }


})

</script>

<style>
.active {
  background-color: burlywood;
}

.circle {
  height: 20px;
  width: 20px;
  border-radius: 10px;
  position: absolute;
}

.bottom {
  left: 25px;
  top: 60px;
}

.top {
  left: 25px;
  top: -10px;
}

.right {
  left: 60px;
  top: 25px;
}

.left {
  left: -10px;
  top: 25px;
}
</style>