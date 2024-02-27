import { landRover } from "./rover";
import { createPlataeu } from "./plateau";
describe("test landing a rover", () => {
  it("should return a function when rover is assigned to an empty cell", () => {
    const plataeu = createPlataeu(3,3)
    const result = landRover(2,2,"N", plataeu)
    expect(typeof result).toBe("function"); 
  });
  it("should return false if rover is assigned to a cell beyond the plataeu", () => {
    const plataeu = createPlataeu(3,3)
    const resultX = landRover(1,3,"N", plataeu)
    const resultY = landRover(3,1,"N", plataeu)
    expect(resultX).toBe(false); 
    expect(resultY).toBe(false); 
  });

  it("the rover is marked on the plataeu", ()=>{
    const plataeu = createPlataeu(3,3)
    const result = landRover(1,2,"N", plataeu)
    const expectedPlataeu = createPlataeu(3,3)
    expectedPlataeu[1][2] = "R"
    expect(plataeu).toStrictEqual(expectedPlataeu)
  });
});
describe("Test the movement of the rover", ()=>{
  it("the rover will move east", ()=>{
    
    const plataeu = createPlataeu(3,3)
    const result = landRover(1,1,"E", plataeu)
    if(result === false){
      throw new Error("This test is failing but not for the thing being tested")
    }
    result("M")
    const expectedPlataeu = createPlataeu(3,3)
    expectedPlataeu[2][1] = "R"
    expect(plataeu).toStrictEqual(expectedPlataeu)
  })

  it("the rover will move west", ()=>{
    
    const plataeu = createPlataeu(3,3)
    const result = landRover(1,1,"W", plataeu)
    if(result === false){
      throw new Error("This test is failing but not for the thing being tested")
    }
    result("M")
    const expectedPlataeu = createPlataeu(3,3)
    expectedPlataeu[0][1] = "R"
    expect(plataeu).toStrictEqual(expectedPlataeu)
  })
  it("the rover will move North", ()=>{
    
    const plataeu = createPlataeu(3,3)
    const result = landRover(1,1,"N", plataeu)
    if(result === false){
      throw new Error("This test is failing but not for the thing being tested")
    }
    result("M")
    const expectedPlataeu = createPlataeu(3,3)
    expectedPlataeu[1][2] = "R"
    expect(plataeu).toStrictEqual(expectedPlataeu)
  })

  it("the rover will move south", ()=>{
    
    const plataeu = createPlataeu(3,3)
    const result = landRover(1,1,"S", plataeu)
    if(result === false){
      throw new Error("This test is failing but not for the thing being tested")
    }
    result("M")
    const expectedPlataeu = createPlataeu(3,3)
    expectedPlataeu[1][0] = "R"
    expect(plataeu).toStrictEqual(expectedPlataeu)
  })
  it("the rover will move multiple steps North", ()=>{
    
    const plataeu = createPlataeu(30,30)
    const result = landRover(0,0,"N", plataeu)
    if(result === false){
      throw new Error("This test is failing but not for the thing being tested")
    }
    result("MMMMMMMMMM")
    const expectedPlataeu = createPlataeu(30,30)
    expectedPlataeu[0][10] = "R"
    expect(plataeu).toStrictEqual(expectedPlataeu)
  })

  it("the rover will move south until it hits the edge of the plataeu", ()=>{
    const plataeu = createPlataeu(30,30)
    const result = landRover(0,0,"N", plataeu)
    if(result === false){
      throw new Error("This test is failing but not for the thing being tested")
    }
    result("MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM")
    const expectedPlataeu = createPlataeu(30,30)
    expectedPlataeu[0][29] = "R"
    expect(plataeu).toStrictEqual(expectedPlataeu)
  })
})
describe("Test the rover can turn and move in the new direction",()=>{
  it("the rover will move south when it landed facing east", ()=>{
    
    const plataeu = createPlataeu(3,3)
    const result = landRover(1,1,"E", plataeu)
    if(result === false){
      throw new Error("This test is failing but not for the thing being tested")
    }
    result("RM")
    const expectedPlataeu = createPlataeu(3,3)
    expectedPlataeu[1][0] = "R"
    expect(plataeu).toStrictEqual(expectedPlataeu)
  })
  it("the rover will move south when it landed facing West", ()=>{
    
    const plataeu = createPlataeu(3,3)
    const result = landRover(1,1,"W", plataeu)
    if(result === false){
      throw new Error("This test is failing but not for the thing being tested")
    }
    result("LM")
    const expectedPlataeu = createPlataeu(3,3)
    expectedPlataeu[1][0] = "R"
    expect(plataeu).toStrictEqual(expectedPlataeu)
  })
  
  it("the rover will make many moves", ()=>{
    
    const plataeu = createPlataeu(3,3)
    const result = landRover(0,0,"S", plataeu)
    if(result === false){
      throw new Error("This test is failing but not for the thing being tested")
    }
    result("LMLMMLMLMLMRMLMLMM")
    const expectedPlataeu = createPlataeu(3,3)
    expectedPlataeu[2][2] = "R"
    expect(plataeu).toStrictEqual(expectedPlataeu)
  })
})