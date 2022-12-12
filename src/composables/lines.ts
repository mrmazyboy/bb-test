import {ILine, CanvasLine } from '@/models/CanvasLine'
import {ref, reactive, onMounted} from "vue";
import {IActiveButton} from '@/composables/circles'
// бесполезный map
const map = new Map<string, ILine>()
const lines = ref(map)

export interface ICoordinates {
    x: number;
    y: number;
}
const createLine = (activeButtons: IActiveButton[]) => {
    const rootCanvasElement = <HTMLCanvasElement>document.getElementById('canvas')
    const coordinates = []

    for (let i = 0; i < activeButtons.length; i++) {
        const currentActiveButton = activeButtons[i]
        const {buttonId, y, x} = currentActiveButton
        const newLine = new CanvasLine(x, y, rootCanvasElement)
        map.set(buttonId, newLine)
        coordinates.push({x: x, y: y})

        if(i === 1) {
            newLine.render(coordinates)
        }
    }



}
const setLines = (activeButtons: IActiveButton[]) => {

    console.log(activeButtons)
    const [first, second] = activeButtons

    if(map.has(first.buttonId) && map.has(second.buttonId)) {
        deleteLines(first.buttonId, second.buttonId)
    } else {
        createLine(activeButtons)
    }

}
const deleteLines = (a: string,b: string) => {
    console.log(a,b)
}

export {lines, setLines, deleteLines, createLine}