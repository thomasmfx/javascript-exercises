const add = function(...n) {
  let add = 0;
  for(number of n) {
    add += number
  };

  return add
};

const subtract = function(n1, n2) {
	return n1 - n2;
};

const sum = function(n) {
  let sum = 0;
  n.forEach((number) => sum += number)

  return sum
};

const multiply = function(arr) {
  return arr.reduce((prev, curr) => prev * curr)
};

console.log(multiply([2, 4]))

const power = function(n1, n2) {
	return Math.pow(n1, n2);
};

const factorial = function(n) {
  if (n === 0) return 1;
  for(let i = n - 1; i >= 1; i--) {
    n *= i;
  }

  return n
};
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
