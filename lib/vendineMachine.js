class vendineMachine {
  constructor(inventory, cash) {
    this.inventory = inventory;
    this.cash = cash;
  }
  showInventory() {
    return this.inventory;
  }

  showCash() {
    return this.cash;
  }
}
