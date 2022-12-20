import {uuid} from "vue-uuid";

export interface ILine {
    readonly id: string | null;
    x1: number | null;
    y1: number | null;
    x2: number | null;
    y2: number | null;
}

export class Line implements ILine {
    constructor(
        public id: string | null,
        public x1: number | null,
        public y1: number | null,
        public x2: number | null,
        public y2: number | null,
    ) {
    }
}
