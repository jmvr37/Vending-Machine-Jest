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
    describe("When selection = 'A2' whit exact change ", () => {
      it("it should return sprite with no change", () => {
        expect(vendingM.dispenseProduct("A2", 1.25)).toEqual("snicker");
      });
    });
    describe("When selection = 'B2' whit  changeInput='2' ", () => {
      it("it should return product name and change back", () => {
        expect(vendingM.dispenseProduct("B1", 2)).toEqual(
          "your change 0.75 quarter"
        );
      });
    });
    describe("When restocking a full slot B1", () => {
      it("it should return product name and unit", () => {
        expect(vendingM.restockProduct("B1")).toThrow(
          "this slot is already full (50) "
        );
      });
    });
    describe("When restocking a full slot 1 dollar", () => {
      it("it should return change name and quantity", () => {
        expect(vendingM.restockChange("B1")).toEqual(
          "this slot is already full (50)"
        );
      });
    });
  });
});
