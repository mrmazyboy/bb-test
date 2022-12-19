import {uuid} from "vue-uuid";

export interface ICircle {
    id: string | null;
    position: string;
}

export class Circle implements ICircle{
    readonly id: string | null = null
    constructor(
        readonly position: string,
    ) {
        this.id = uuid.v4()
        this.position = position
    }
}
