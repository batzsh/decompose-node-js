const Decompose = require("../classes/Decompose");
const decompose = new Decompose();
const assert = require("assert");

describe("Testing Decompose class", () => {
  it("should be a prime number", () => {
    assert.ok(
      decompose.isPrime(13),
      "this shouldn't fail. 13 is a prime number."
    );
  });

  it("should return all prime numbers from an array.", () => {
    assert.ok(
      decompose.getPrimesFromDivisors([1, 3, 5, 9, 15, 45]),
      "this should return [1,3,5]"
    );
  });

  it("should return all divisors from an number", () => {
    assert.ok(
      decompose.getDivisors(45),
      "this should return [1, 3, 5, 9, 15, 45]"
    );
  });
});
