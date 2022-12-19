import {ILine, Line} from "@/models/Line";
import {ISquare, Square} from "@/models/Square";
import {ICircle} from "@/models/Circle";
import {uuid} from "vue-uuid";

const randomizer = () => Math.round(Math.random())
export interface IPlace {
    width: number;
    height: number;
    squares: ISquare[];
    lines: ILine[];
    activeCircles: ICircle[];
    createSquares(): void;
    setActiveCircles(): void;
    // createLine(circle: ICircle, lineIndex: string): ILine | undefined;
    lineIndex: null | string
}


export class Place implements IPlace {
    static instance: Place;
    width = 100
    height = 100
    squares: ISquare[] = []
    lines: ILine[] = []
    activeCircles = []
    lineIndex = null

    private constructor() {
    }

    static getInstance() {
        if (!Place.instance) {
            Place.instance = new Place();
        }
        return Place.instance;
    }
    public setActiveCircles() {

    }
    public createSquares() {
        const newSquare = new Square(randomizer(), randomizer())
        newSquare.createCircles()
        this.squares.push(newSquare)
    }

    // public createLine(circle: ICircle, lineIndex: string): ILine | undefined{
        // if(lineIndex === null) {
        //     this.lineIndex = lineIndex
        //     const newLine = new Line(uuid.v4(), circle.x, circle.y, null, null, circle.id, null)
        //     this.lines.push(newLine)
        //     return newLine
        // } else {
        //     const line = this.lines.find((el) => {
        //         return el.id === this.lineIndex
        //     })
        //     if(line) {
        //         line.x2 = circle.x
        //         line.y2 = circle.y
        //         line.endCoordinateParentId = circle.id
        //     }
        //     this.lineIndex = null
        //     return line
        // }
    // }
}