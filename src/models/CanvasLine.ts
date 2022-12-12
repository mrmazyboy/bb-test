export interface ILine {
    x: number;
    y: number;
    update(): void;
    render(a: any): void;
}

export class CanvasLine implements ILine{
    constructor(public x: number, public y: number, private rootCanvasEl: HTMLCanvasElement) {}
    update() {
        console.log('update')
        // const c = document.getElementById('canvas') as HTMLCanvasElement
        // c.width = window.innerWidth
        // c.height = window.innerHeight
        // const ctx : any = c.getContext('2d')
        // ctx.beginPath();
        // ctx.rect(-20, -20, 150, 100);
        // ctx.stroke();
        //
        // const a : any = c.getContext('2d')
        // a.beginPath()
        // a.rect(50, 50, 500, 400)
        // a.stroke()
    }

    render(coordinates: any) {
        const [first, second] = coordinates
        const canvas = this.rootCanvasEl
        const ctx: any= canvas.getContext("2d");

        ctx.beginPath();
        ctx.moveTo(first.x, first.y);
        ctx.lineTo(second.x, second.y);
        ctx.stroke();

    }






}