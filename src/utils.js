const toArrayOfNumbers = (a, b, other = []) => {
  const arrayOfNumbers = [];
  if (typeof a === "number") {
    arrayOfNumbers.push(a);
  }
  if (typeof b === "number") {
    arrayOfNumbers.push(b);
  }
  for (let i = 0; i < other.length; i++) {
    if (typeof other[i] === "number") {
      arrayOfNumbers.push(other[i]);
    }
  }
  return arrayOfNumbers;
};

const noParameters = (a, b, other = []) => {
  return other.length === 0 && !a && !b;
};

module.exports = { fromArrayOfNumbers: toArrayOfNumbers, noParameters };
