let number1 = 9;

let number2 = number1;

number2 = 11;

console.log(number1);
console.log(number2);


let animals = ["cat", "dog", "bird"];

let otherAnimals = animals;
otherAnimals.push("mouse");

console.log(animals);
console.log(otherAnimals);

let colors = ["blue", "red", "green"];
let otherColors = [...colors];

otherColors.push("black");

console.log(colors);
console.log(otherColors);


