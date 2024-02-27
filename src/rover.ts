import { checkPlataeu } from "./plateau";
const moveDirection = {
  "N":{x:0, y:1, L:"W", R:"E"},
  "E":{x:1, y:0, L:"N", R:"S"},
  "S":{x:0, y:-1, L:"E", R:"W"},
  "W":{x:-1, y:0, L:"S", R:"N"},
} 

export function landRover(x: number, y: number, facing:"N"|"E"|"S"|"W", plataeu:Array<Array<string>>): Function|false {
  if (!checkPlataeu(plataeu, x, y)){
    return false
  }
  plataeu[x][y] = "R"
  return (moves :string)=>{
    let hitSomething:boolean = false
    moves.split("").forEach((move)=>{
      if (!hitSomething){
        switch(move){
          case "M":
            
            if(checkPlataeu(plataeu,x+moveDirection[facing].x, y+moveDirection[facing].y)){
              plataeu[x][y]=""
              x += moveDirection[facing].x, y += moveDirection[facing].y
              plataeu[x][y] = "R"
            }else{
              hitSomething = true
              console.log(`the rover has stopped because it cant travel to ${x+moveDirection[facing].x}, ${y+moveDirection[facing].y}`)
            }
            break;
          case "R":
          case "L":
            facing = moveDirection[facing][move] as "N"|"E"|"S"|"W"
            break;
        }
      }
    })
  };
}

