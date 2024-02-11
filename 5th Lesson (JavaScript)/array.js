// // let number = [1,2,3,4,5,6];
// // number.push(7,8);
// // number.pop();
// // number.shift();
// // number.unshift(1);
// // console.log(number);

// const colors=["red","green","blue","black"];

// console.log(colors);
// console.log(colors.length);

// console.log(colors[3]);
// console.log(colors.at(2));

// colors.push("white");
// console.log(colors, colors.push());

// console.log(colors.pop(),colors);

// const otherColors=["orange", "gray"];

// console.log(colors.concat(otherColors));
// console.log(colors);

// console.log(colors.shift(), colors);

// console.log(colors.unshift("purple"),colors);

// console.log(colors.join("\n"));

// console.log(colors.indexOf("black"));

// let i=colors.indexOf("black");
// if (i<0) {
//     console.log(false);
// }else {
//     console.log(true);
// }

// const firstNames=["ali","ayşe","sude","furkan"];

// const nums=[1,2,3,7,8,9,6,4,5];

// console.log(nums.indexOf(5));
// nums.includes(nums.indexOf(5));
// nums.includes(8);

// console.log(firstNames.includes("furkan"));

// if (colors.indexOf("cenk")+1){
//     console.log(true);
// }else{
//     console.log(false);
// }

const gameConsoles = [
  "Playstation 5",
  30000,
  true,
  "Xbox Series X",
  28000,
  true,
  "Nintendo Switch",
  20000,
  false,
  "Playstation 4",
  13000,
  false,
  "Xbox One",
  12000,
  true,
  "Wii",
  10000,
  false,
  "Gameboy Advance",
  5000,
  false,
  "Atari",
  5000,
  true,
];

console.log(gameConsoles);

console.log(
  gameConsoles.splice(
    18,
    0,
    "Sega Genesis",
    4500,
    false,
    "Nintendo DS",
    6000,
    true
  )
);
console.log(gameConsoles.splice(21, 0, "Nintendo DS", 6000, true));
console.log(gameConsoles.splice(12, 0, "Playstation 2", 2000, true));
console.log(
  gameConsoles.splice(15, 0, "Playstation 1", 1000, false),
  gameConsoles
);

console.log(gameConsoles.splice(12, 6));
console.log(gameConsoles.splice(18, 6), gameConsoles);

console.log(gameConsoles.splice(1, 2, "35000", false));
console.log(
  gameConsoles.splice(15, 3, "Nintedo Wii", 7500, true),
  gameConsoles
);

console.log(
  gameConsoles.splice(
    18,
    3,
    "Gameboy Color",
    3500,
    true,
    "NES",
    45000,
    true,
    "Playstation Portable",
    12000,
    false
  )
);

gameConsoles.splice(
  gameConsoles.indexOf("Xbox One"),
  3,
  "Xbox One S",
  11000,
  false
);
gameConsoles.splice(
  gameConsoles.indexOf("Playstation Portable"),
  1,
  "Playstation Vita"
);
console.log(gameConsoles);

// let search = prompt("Please enter a game console");

// for (let i = 0; i < gameConsoles.length; i++) {
//   if (gameConsoles[i] === search) {
//     console.log("Found");
//     break;
//   } else if (i === gameConsoles.length - 1 && gameConsoles[i] !== search) {
//     console.log("Can not be found");
//   }
// }



const names = ["Cenk", "Berkay", "Barkin", "Çağatay", "Ali Riza"];
let search = prompt("Please enter a name").trim().toLowerCase();
let result = null;

 for (let i = 0; i < names.length; i++){
     if (names[i].toLowerCase() === search){
         result = search;
         break;
     }
 }
 if (result){
    console.log("Found: "+ result);
 }else {
    console.log("Can not be found");
 }
