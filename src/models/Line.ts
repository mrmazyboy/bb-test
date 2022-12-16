import {uuid} from "vue-uuid";

export interface ILine {
    readonly id: string | null;
    x1: number | null;
    y1: number | null;
    x2: number | null;
    y2: number | null;
    startCoordinateParentId: string | null;
    endCoordinateParentId: string | null;
    updateStartCoordinates(x: number, y: number): void;
    updateEndCoordinates(x: number, y: number): void;
}

export class Line implements ILine {
    constructor(
        public id: string | null,
        public x1: number | null,
        public y1: number | null,
        public x2: number | null,
        public y2: number | null,
        public startCoordinateParentId: string | null,
        public endCoordinateParentId: string | null,
    ) {
    }
    public updateStartCoordinates(x: number, y: number) {
        this.x1 = x
        this.y1 = y
    }
    public updateEndCoordinates(x: number, y: number) {
        this.x2 = x
        this.y2 = y
    }
}
