const { fromArrayOfNumbers, noParameters } = require("./utils");

const add = (a, b, ...other) => {
  if (noParameters(a, b, other)) return 0;
  return fromArrayOfNumbers(a, b, other).reduce((a, b) => a + b, 0);
};

const multiply = (a, b, ...other) => {
  if (noParameters(a, b, other)) return 0;
  return fromArrayOfNumbers(a, b, other).reduce((a, b) => a * b, 1);
};

const divide = (a, b, ...other) => {
  if (noParameters(a, b, other)) return 0;
  const arrayOfNumbers = fromArrayOfNumbers(a, b, other);
  let division = arrayOfNumbers[0];
  for (let i = 1; i < arrayOfNumbers.length; i++) {
    division /= arrayOfNumbers[i];
  }
  return division;
};

const subtract = (a, b, ...other) => {
  if (noParameters(a, b, other)) return 0;
  return fromArrayOfNumbers(a, b, other).reduce((a, b) => a - b);
};

module.exports = { add, multiply, divide, subtract };
