import { landRover } from "./rover";

const { createPlataeu } = require( "./plateau");
const readlineSync = require('readline-sync');

let isRunning :boolean = true

let plataeu, rover
function userInput(output:string, validator = (input:string):string=>{return input}):string{
    return validator(readlineSync.question(output))
}
while(isRunning){
    const userInput = readlineSync.question('Please enter your input: ');
    console.log(userInput)
    switch(userInput){
        case "plataeu":
        case "p":
            let inputIsValid: boolean = false;
            let x: number = 0, y: number = 0;

            while (!inputIsValid) {
                const xString = readlineSync.question('Please enter how many cells east/west the plateau is: ');
                const yString = readlineSync.question('Please enter how many cells north/south the plateau is: ');

                if (!isNaN(parseInt(xString)) && !isNaN(parseInt(yString))) {
                    inputIsValid = true;
                    x = parseInt(xString);
                    y = parseInt(yString);
                } else {
                    console.log("Invalid input, please enter numeric values.");
                }
            }

            plataeu = createPlataeu(x, y);
            console.log(`Plateau created with dimensions ${x} by ${y}.`);
            break;
        case "rover":
        case "r":
            if(plataeu === undefined){
                console.log("please initilise the plataeu")
                break;
            }
            if(rover === undefined){
                while(true){
                    try{
                        const roverX = parseInt(userInput('Enter rover X coordinate: '), 10);
                        const roverY = parseInt(userInput('Enter rover Y coordinate: '), 10);
                        const roverDirection = userInput('Enter rover direction (N, E, S, W): ');
                        rover = landRover(roverX, roverY, roverDirection, plataeu);
                        console.log(`Rover deployed at (${roverX}, ${roverY}, ${roverDirection}).`);
                        break;
                    }catch (e){
                        console.log("that was wrong")
                    }
                }
            break;

            }

            break;
        case "quit":
        case "q":
            isRunning = false
            break;
        default:
            console.log(`Command not recognised`)
    }
}

