import {ref, reactive} from "vue";

const squares = ref<number[]>([])

const setSquares = (id: number | undefined) => {
    if(!id) {
        squares.value.push(squares.value[squares.value.length - 1] + 1)
    }
    squares.value.filter(el => el !== id)
}