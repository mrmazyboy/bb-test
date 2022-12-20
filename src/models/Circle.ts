import {uuid} from "vue-uuid";

export interface ICircle {
    id: string;
    position: string;
}

export class Circle implements ICircle{
    readonly id: string = ''
    constructor(
        readonly position: string,
    ) {
        this.id = uuid.v4()
        this.position = position
    }
}
