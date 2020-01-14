class vendineMachine {
  constructor(inventory, changeInventory) {
    this._inventory = inventory;
    this._changeInventory = changeInventory;
  }

  dispenseProduct(selection, inventory, cash, changeInput) {
    const product = this._inventory.products;
    const change = this._changeInventory.change;
    const price = product[selection].price;
    const name = product[selection].name;
    if (!product[selection]) throw new Error("product not available");
    if (price === changeInput) {
      if (product[selection].unit === 0) {
        throw new error("sorry, this product is sold out");
      }
      product[selection].unit -= 1;
      return name;
    }
    let changeRequired = price - changeInput;
    if (price > changeInput) {
      throw new error("Sorry, not enough money" + changeRequired);
    } else if (price < changeInput) {
      let changeBack = price - changeInput;
      if ((changeBack * 100) % 25 === 0) {
        return " your change" + name;
      }
    }
  }

  restockProduct(restockProduct) {
    const unit = this._inventory.products;
    // const restock = this.restock.products;
    const maxQuantity = unit[restockProduct].maxQuantity;
    if (unit === maxQuantity) {
      throw new error("this slot is already full(" + maxQuantity + ")");
    }
    const newRestock = maxQuantity - unit;
    const productRestock = unit + newRestock;
    return "full slot (" + productRestock + ")";
  }

  restockChange(restockChange) {
    const change = this._changeInventory.change;
    const quantity = change[restockChange].currentQuantity;
    const maxQuantity = change[restockChange].maxQuantity;
    if (unit === maxQuantity) {
      throw new error("this slot is already full  (" + maxQuantity + ")");
    }
    const newChangeRestock = maxQuantity - quantity;
    const changeRestock = quantity + newChangeRestock;
    return " full slot (" + changeRestock + " )";
  }
}

module.exports = vendineMachine;