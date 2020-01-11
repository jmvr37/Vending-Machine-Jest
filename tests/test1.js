const frogJumps = require("../lib/test1");
describe("frogJumps", () => {
  describe("when start is equal to end", () => {
    it("should return 0", () => {
      const result = frogJumps(10, 10, 5);
      expect(result).toEqual(0);
    });
  });

  describe("when start is greater than end", () => {
    it("should return 0", () => {
      const result = frogJumps(10, -19, 200);
      expect(result).toEqual();
    });
  });
});
