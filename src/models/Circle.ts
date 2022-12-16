import {ILine, Line} from "@/models/Line";
import {CirclesPositions, ISquare} from "@/models/Square";
import {uuid} from "vue-uuid";
import {Place} from "@/models/Place";

export interface ICircle {
    readonly id: string | null;
    position: CirclesPositions;
    x: number;
    y: number;
    active: boolean;
    parent: ISquare;
    linesStartForward: ILine[];
    linesEndForward: ILine[];
    lineId: null | string
    update(x: number, y: number): void;
    createLine(): void;
}

export class Circle implements ICircle{
    id: string | null = null
    active = false
    linesStartForward: ILine[] = []
    linesEndForward: ILine[] = []
    lineId: string | null = null

    constructor(
        public position: CirclesPositions,
        public x: number,
        public y: number,
        public parent: ISquare
    ) {
        this.id = uuid.v4()
    }

    update(x: number, y: number) {
       this.linesEndForward.forEach((el: ILine) => {
           el.updateEndCoordinates(x,y)
       })

       this.linesStartForward.forEach((el: ILine) => {
           el.updateStartCoordinates(x,y)
       })
    }

    createLine() {
        const place = Place.instance
        const lineId = uuid.v4()
        this.lineId = lineId
        const newLine = place.createLine(this, lineId)

        if(newLine === undefined) return

        if(newLine.id) {
            this.linesStartForward.push(newLine)
        } else {
            this.linesEndForward.push(newLine)
        }
    }
}
