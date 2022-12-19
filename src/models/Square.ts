import {Circle, ICircle} from "@/models/Circle";
import {uuid} from "vue-uuid";
export type Positions = {x: number, y: number}
export type SquareSize = {height: number, width: number}
export interface ISquare {
    readonly id: string | null;
    circles: ICircle[];
    x: number,
    y: number,
    width: number;
    height: number;
    createCircles(): void
}

export class Square implements ISquare {
    positions = ['top', 'right', 'bottom', 'left']
    circles: ICircle[] = []
    id: string | null = null
    height = 70
    width = 70
    x = 0
    y = 0
    constructor(x: number, y: number, width?: number | undefined, height?: number | undefined) {
        this.id = uuid.v4()
        if(width) this.width = width
        if(height) this.height = height
        this.x = x
        this.y = y
    }
    createCircles() {
        this.circles = Object.values(this.positions).map((el) => {
            return new Circle(el)
        })
    }
}