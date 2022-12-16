import {Circle, ICircle} from "@/models/Circle";
import {uuid} from "vue-uuid";
export enum CirclesPositions {
    TOP = 'top',
    RIGHT = 'right',
    BOTTOM = 'bottom',
    LEFT = 'left',
}
export interface ISquare {
    readonly id: string | null;
    circles: ICircle[];
    initialX: number;
    initialY: number;
    width: number;
    height: number;
    updateCoordinates(x: number, y: number): void;
    updateCirclesCoordinates(x: number, y: number): void;
    createCircles(): void
}

export class Square implements ISquare {
    circles: ICircle[] = []
    id: string | null = null
    height = 70
    width = 70
    constructor(public initialX: number,public initialY: number, width?: number | undefined, height?: number | undefined) {
        this.id = uuid.v4()
        if(width) this.width = width
        if(height) this.height = height
    }
    createCircles() {
        Object.values(CirclesPositions).forEach((el) => {
            // this.circles.push(new Circle(el))
        })
    }
    updateCirclesCoordinates(x: number, y: number) {
    }
    updateCoordinates(x: number, y: number) {
    }


}