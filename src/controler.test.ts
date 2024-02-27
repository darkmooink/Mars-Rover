import { Controller } from "./controler"
describe("A plateau is made",()=>{
    const controller = new Controller({x:5,y:4})
    it("a plateau is made and returned for inspection",()=>{
        const expected = [
            ["","","","",""],
            ["","","","",""],
            ["","","","",""],
            ["","","","",""],
        ]
        const actual = controller.plataeuView
        expect(expected).toStrictEqual(actual)
    })
    it("the plateau is not read only",()=>{
        try{
        controller.plataeuView[1][1] = "p"
        } catch {
            
        }
    })
})