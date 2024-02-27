export type plataeu = Array<Array<string>>

export function createPlataeu(x:number, y:number):plataeu
{
    return Array.from({ length: y }, () => new Array(x).fill(""));

}

export function checkPlataeu(plataeu :plataeu, x :number, y :number):boolean{
    if (x >= plataeu.length || y >= plataeu[x].length){
        return false
    }
    return plataeu[x][y] === ""
}

export const functionsforTesting = {
    createPlataeu
}
