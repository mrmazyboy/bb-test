import {ref} from 'vue'
import {setLines} from "@/composables/lines";

export interface IActiveButton {
    buttonId: string;
    x: number;
    y: number;
}

const activeButtons = ref<IActiveButton[]>([])
const setActiveButtons = (buttonId: string, x: number, y: number) => {
   if(activeButtons.value.length === 1) {
       setLines(activeButtons.value)
       activeButtons.value = []
       return
   }

   if(activeButtons.value.find((el) => el.buttonId === buttonId)) {
        activeButtons.value = []
        return
   }

   activeButtons.value.push({buttonId: buttonId, x: x, y: y})

}

export {activeButtons, setActiveButtons}


