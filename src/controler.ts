import { createPlataeu, plataeu } from "./plateau";

export class Controller{
    private readonly plateau:plataeu

    constructor(plataeuInit:{x:number, y:number}){
        this.plateau = createPlataeu(plataeuInit.x, plataeuInit.y)
    }
    get plataeuView(): Array<readonly string[]> {
        return this.plateau;
    } 
}