const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	const init = 0;
  return arr.reduce((first, currVal) => first + currVal, init);
};

const multiply = function(arr) {
  const init = 1;
  return arr.reduce((first, currVal)=> first * currVal, init);
};

const power = function(num1, num2) {
  return num1 ** num2;
};

const factorial = function(num) {
  let ans = 1;
  for(let i = 1; i <= num; i++){
    ans *= i;
  }
  return ans;
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
