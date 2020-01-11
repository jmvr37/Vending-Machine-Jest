const vendingMachine = require("../lib/test1");
describe("vending machine", () => {
  describe("if there's not enough coins to purchase that item", () => {
    it("it should return false", () => {
      const result = vendingMachine();
      expect(result).toEqual();
    });
  });
});
