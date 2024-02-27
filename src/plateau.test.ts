import { functionsforTesting } from "./plateau";
const createPlataeu = functionsforTesting.createPlataeu
describe("Create a plateau", () => {
  it("should return that the plateau is 5 wide and 4 tall", () => {
    const expected = [
        ["","","","",""],
        ["","","","",""],
        ["","","","",""],
        ["","","","",""],
    ]
    expect(createPlataeu(5, 4)).toStrictEqual(expected);
  });
});
