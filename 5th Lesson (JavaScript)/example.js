const numbers = [1, 3, 5, 7, 9];
const names = ["cenk", "orkun", "berkay", "barkın", "derin"];
const randomLogs = [1, 5, "dog", "cat", true];
const grades = [90, 100, 87, 34, 87, 65, 25];
const subArrTest = ["Eivor", ["Sigurd", "Fulke"], "Basim"];

// function reverseArray(arr) {
//   const newArr = [];
//   let count = 0;

//   for (let i = arr.length - 1; i >= 0; i--) {
//     newArr[count] = arr[i];
//     count++;
//   }
//   return console.log(newArr);
// }

const reverseArray = (arr) => {
  const newArr = [];
  let count = 0;

  for (let i = arr.length - 1; i >= 0; i--) {
    newArr[count] = arr[i];
    count++;
  }
  return console.log(newArr);
};

reverseArray(numbers);
reverseArray(names);
reverseArray(randomLogs);
reverseArray(grades);
reverseArray(subArrTest); //does not work properly

let student = {
    name: "Cenk",
    surname: "Kaynak",
    age: 32
};

console.log(Object.entries(student));
console.log(Object.keys(student));
console.log(Object.values(student));