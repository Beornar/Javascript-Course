const colors = ["red", "green", "blue", "yellow", "black", "gray"];

const newColors = colors;
newColors.pop();
newColors.pop();

console.log(colors);
console.log(newColors);

const animals = ["dog", "cat", "bird", "mouse"];

const newAnimals = [...animals];
newAnimals.pop();
newAnimals.pop();

console.log(animals);
console.log(newAnimals);

const student = {
    name: "Cenk",
    surname: "Kaynak",
    age: 32
};

const newStudent = student;
newStudent.surname = "Unknown";

console.log(student);
console.log(newStudent);

const person = {
    name: "Berkay",
    surname: "Turna",
    age: 35
};

const newPerson = { ...person };
newPerson.job = "Vet";

console.log(person);
console.log(newPerson);

const oddNums = [1, 3, 5, 7, 9];
const evenNums = [0, 2, 4, 6, 8];

const allNums = [...oddNums, ...evenNums];
console.log(allNums);

function add(num1, num2, num3) {
    return num1 + num2 + num3;
}
const numArr = [1, 2, 3];

console.log(add(numArr, numArr, numArr));
console.log(add(...numArr));

console.log("////////////////////////////////////////////////////////////////////////////////");

const pet = {
    name: "Olaf",
    kind: "Cat",
    age: 3,
    owners: ["Cenk", "Belemir"]
};

const newPet = { ...pet, age: 5 };
pet.owners[1] = " ";

const newestPet = JSON.parse(JSON.stringify({ ...pet, name: "Susam", kind: "Dog" }));
pet.owners[1] = "Barkın";

console.log(pet);
console.log(newPet);
console.log(newestPet);

console.log(Object.is(pet.owners, newestPet.owners));
console.log(Object.is(newPet.owners, newestPet.owners));