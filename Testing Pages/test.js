// let tweet = prompt("Enter your tweet");
// let tweetLenght = tweet.length;
// console.log("Your tweet has " + tweetLenght + " characters. You can type " + (140 - tweetLenght) + " characters more.");

// if (tweetLenght>140){
//     let newTweet = tweet.slice(0,140);
//     console.log("Your tweet has more than 140 characters. So here is your new tweet:\n" + newTweet);
// }else {
//     console.log(tweet);
// }

// let askName = prompt("Enter your name:");
// let firstChar = askName.slice(0,1).toUpperCase();
// let restOfName = askName.slice(1).toLocaleLowerCase();
// console.log(firstChar+restOfName);

// const bmiCalculator = (weight, height) => {
//     return weight/(height*height);
// }

// let bmi = bmiCalculator(65, 1.8);

// console.log(bmi);

// const guestList = ["Cenk", "Belo"];

// let guestName = prompt("Enter your name");

// if (guestList.includes(guestName)) {
//     alert("Welcome!");
// } else alert("You need to leave.");

// let arr = [];
// let count = 1;

// const fizzBuzz = () => {
//     if (count % 3 == 0 && count % 5 == 0) arr.push("Fizzbuzz");
//     else if (count % 3 == 0) arr.push("Fizz");
//     else if (count % 5 == 0) arr.push("Buzz");
//     else arr.push(count);
//     count++;
//     console.log(arr);
// }

// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();


let names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
let randomNum = Math.floor(Math.random() * (names.length));
console.log(names[randomNum]);
