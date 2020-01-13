const vendingMachine = require("../lib/vendineMachine");
const Inventory = require("../lib/inventoryMachine");
const changeInventory = require("../lib/changeMachine");
const vendingM = new vendingMachine(Inventory, changeInventory);

describe("Vending Machine:", () => {
  describe("buy a new product", () => {
    describe("When selection = 'A1' with exact change ", () => {
      it("should return coke with no change", () => {
        expect(vendingM.dispenseProduct("A1", 1.5)).toEqual("coke");
      });
    });
    describe("When selection = 'A1' but more than the existence inventory ", () => {
      it("not enough pruducts", () => {
        expect(vendingM.dispenseProduct("A1", 11)).toThrow("error");
      });
    });
    describe("When selection = 'B1' whit exact change ", () => {
      it("it should return sprite with no change", () => {
        expect(vendingM.dispenseProduct("B1", 1.25)).toEqual("sprite");
      });
    });
  });
});
