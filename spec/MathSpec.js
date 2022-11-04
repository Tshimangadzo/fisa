const math = require("../src/Math");

describe("Add function", () => {
  it("Should return 0 if no parameter passed to function", () => {
    const add = math.add();
    expect(add).toEqual(0);
  });

  it("Should return exact parameter if one parameter passed", () => {
    const add = math.add(2);
    expect(add).toEqual(2);
  });

  it("Should return addition of two numbers", () => {
    const add = math.add(2, 5);
    expect(add).toEqual(7);
  });

  it("Should return addition of 3 numbers", () => {
    const add = math.add(2, 5, 3);
    expect(add).toEqual(10);
  });

  it("Should return addition of 10 numbers", () => {
    const add = math.add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    expect(add).toEqual(55);
  });

  it("Should return addition of number if string passed", () => {
    const add = math.add("s", 4);
    expect(add).toEqual(4);
  });

  it("Should return 16", () => {
    const add = math.add("s", "4", 7, 9, "33");
    expect(add).toEqual(16);
  });
});

describe("Subtract function", () => {
  it("Should return 0 if no parameter passed to function", () => {
    const subtract = math.subtract();
    expect(subtract).toEqual(0);
  });

  it("Should return exact parameter if one parameter passed", () => {
    const subtract = math.subtract(2);
    expect(subtract).toEqual(2);
  });

  it("Should return subtraction of two numbers", () => {
    const subtract = math.subtract(2, 5);
    expect(subtract).toEqual(-3);
  });

  it("Should return subtraction of 3 numbers", () => {
    const subtract = math.subtract(2, 5, 3);
    expect(subtract).toEqual(-6);
  });

  it("Should return subtraction of 10 numbers", () => {
    const subtract = math.subtract(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    expect(subtract).toEqual(-53);
  });

  it("Should return subtraction of number if string passed", () => {
    const subtract = math.subtract("s", 4);
    expect(subtract).toEqual(4);
  });

  it("Should return -2", () => {
    const subtract = math.subtract("s", "4", 7, 9, "33");
    expect(subtract).toEqual(-2);
  });
});

describe("Divide function", () => {
  it("Should return 0 if no parameter passed to function", () => {
    const divide = math.divide();
    expect(divide).toEqual(0);
  });

  it("Should return exact parameter if one parameter passed", () => {
    const divide = math.divide(2);
    expect(divide).toEqual(2);
  });

  it("Should return divide of two numbers", () => {
    const divide = math.divide(2, 5);
    expect(divide).toEqual(0.4);
  });

  it("Should return divide of 3 numbers", () => {
    const divide = math.divide(2, 5, 3);
    expect(divide).toEqual(0.13333333333333333);
  });
  
  it("Should return divide of 10 numbers", () => {
    const divide = math.divide(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    expect(divide).toEqual(2.7557319223985894e-7);
  });

  it("Should return divide of number if string passed", () => {
    const divide = math.divide("s", 4);
    expect(divide).toEqual(4);
  });

  it("Should return -2", () => {
    const divide = math.divide("s", "4", 7, 9, "33");
    expect(divide).toEqual(0.7777777777777778);
  });
});

describe("Multiply function", () => {
  it("Should return 0 if no parameter passed to function", () => {
    const multiply = math.multiply();
    expect(multiply).toEqual(0);
  });

  it("Should return exact parameter if one parameter passed", () => {
    const multiply = math.multiply(2);
    expect(multiply).toEqual(2);
  });

  it("Should return multiply of two numbers", () => {
    const multiply = math.multiply(2, 5);
    expect(multiply).toEqual(10);
  });

  it("Should return multiply of 3 numbers", () => {
    const multiply = math.multiply(2, 5, 3);
    expect(multiply).toEqual(30);
  });

  it("Should return multiply of 10 numbers", () => {
    const multiply = math.multiply(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    expect(multiply).toEqual(3628800);
  });

  it("Should return multiply of number if string passed", () => {
    const multiply = math.multiply("s", 4);
    expect(multiply).toEqual(4);
  });

  it("Should return -2", () => {
    const multiply = math.multiply("s", "4", 7, 9, "33");
    expect(multiply).toEqual(63);
  });
});
