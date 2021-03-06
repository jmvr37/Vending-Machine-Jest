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
    describe("When selection = 'A3'", () => {
      it("it should throw an error 'product not available'", () => {
        expect(() => vendingM.dispenseProduct("A3", null)).toThrow(Error);
      });
    });

    describe("When selection = 'B1' with exact change ", () => {
      it("it should return sprite with no change", () => {
        expect(vendingM.dispenseProduct("B1", 1.25)).toEqual("sprite");
      });
    });
    describe("When selection = 'A2' with exact change ", () => {
      it("it should return snicker with no change", () => {
        expect(vendingM.dispenseProduct("A2", 2)).toEqual("snicker");
      });
    });

    describe("When selection = 'A1' with  changeInput='1' ", () => {
      it("it should throw an error 'Sorry, not enough money 50 cents'", () => {
        expect(vendingM.dispenseProduct("A1", 1)).toThrow(Error);
      });
    });
    describe("When restocking a full slot B1", () => {
      it("it should return product name and unit", () => {
        expect(vendingM.restockProduct("B1")).toEqual(
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
    describe("When restocking 1 dollar ", () => {
      it("should throw an error 'this slot is already full (50) for 1 dollar", () => {
        expect(() => vendingM.restockChange("1 dollar")).toThrow(Error);
      });
    });
  });
});
