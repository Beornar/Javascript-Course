function addTwoNumbers(num1, num2) {
  return num1 + num2;
  console.log("Hello World");
}

console.log(addTwoNumbers(8, 9));

function multiply(num1, num2) {
  return num1 * num2;
}

console.log(multiply(3, 5));

const divide = function (num1, num2) {
  return num1 / num2;
};

console.log(divide(15, 4));

const sub = function (num1, num2) {
  return num1 - num2;
};
console.log(sub(20, 14));

const add = (num1, num2, num3 = 0) => num1 + num2 + num3;
console.log(this);
console.log(add(3, 5, 8));

const average = (num1, num2, num3, num4, num5) => (num1 + num2 + num3 + num4 + num5) / 5;

console.log(average(8, 9, 8, 10, 9));
