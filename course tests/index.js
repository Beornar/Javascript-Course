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


let person1 = {
    name: "Cenk",
    age: 32
}

let person2 = person1;

person2.name = "Berkay";

console.log(person1);
console.log(person2);

let person3 = { ...person1 };
person3.name = "Ali Rıza";

console.log(person3);
