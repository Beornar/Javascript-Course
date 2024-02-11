// let firstName = "Cenk";
// let lastName = "Kaynak";
// let sentence = "       Merhaba, ben Cenk.        ";
// let quote ='Gandalf: "Look to my coming on the first light of the fifth day, at dawn look to the east."';

// console.log(sentence.trim());

// console.log(firstName.toUpperCase());
// console.log(lastName.toLowerCase());

// console.log(firstName.concat(" " + lastName));

// console.log(quote.indexOf("the", quote.indexOf("the") + 1));

// console.log(quote.slice(20, 40));
// console.log(quote.slice(35, -4));

// console.log(quote.substring(9, 22));
// console.log(quote.substring(12, 5));

// console.log(quote.search("Gimli"));
// console.log(quote.includes("Gandalf"));
// console.log(quote.includes("Elrond"));

// console.log(quote.replace("Gandalf", "Saruman"));
// console.log(quote.replaceAll(" ", "-"));

// const writer = "Carlo Collodi";
// const book = "Pinocchio";
// const publishYear = 1883;

// console.log(
//   `${writer}, ${publishYear} tarihinde ${book} adlı kitabı yayınlamıştır.`
// );

// const game = "Lies of P";
// const releaseDate = 2023;
// const companyName = "Neowiz Games";

// console.log(
//   `En son oynadığım oyun ${game}'dir. Bu oyun ${releaseDate} tarihinde ${companyName} tarafından çıkarılmıştır.`
// );

// console.log("0 100(dahil değil) arası:   "+ Math.trunc(Math.random()*100)); //0 100, 100 dahil değil
// console.log("0 100 arası:   "+Math.round(Math.random()*100)); //0 100, 100 dahil

// console.log("0 17(dahil değil) arası:   "+Math.trunc(Math.random()*17)); //0 17, 17 dahil değil
// console.log("0 17 arası:   "+Math.round(Math.random()*17)); //0 17, 17 dahil

// console.log("-5 5(dahil değil) arası:   "+Math.trunc(Math.random()*10-5)); //-5 5, 5 dahil değil
// console.log("-5 5 arası:   "+Math.round(Math.random()*10-5)); //-5 5, 5 dahil

// console.log("-32 0(dahil değil) arası:   "+Math.floor(Math.random()*-32)); //-32 0, 0 dahil değil
// console.log("-32 0 arası:   "+Math.trunc(Math.random()*-32)); //-32 0, 0 dahil

// let age = 66;

// if (age < 18) {
//   console.log("underaged");
// } else if (age < 65) {
//   console.log("young adult");
// } else if (age >= 65) {
//   console.log("senior");
// } else {
//   console.log("Not identified");
// }

// let number = 5;
// if (number > 3) {
//   console.log("Number is greater than 3");
// } else {
//   console.log("Number is less than 3");
// }

// let num1 = 15;
// let num2 = 7;
// console.log(num2 > num1);

// let a = 0;

// while (a < 5) {
//   console.log("a=" + a);
//   a++;
// }

// for (let x = 10; x > 3; x--) {
//   console.log("x=" + x);
// }

// num1 = -9;
// num2 = -3;
// console.log(num1 < 5 && num2 > 1);
// console.log(num1 < 5 || num2 > 1);
// console.log(num1 != num2);

// let greater = num1 > num2 || num1 < 0;
// console.log(greater);

// let age = 32;
// age > 18 && console.log("adult");
// !(age > 18) || console.log("adult");

// if (age > 15 && age < 19) {
//   console.log("young");
// } else if (age > 19 && age < 40) {
//   console.log("adult");
// }

let month = -12;
month = Math.abs(month % 12);

switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("August");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("October");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
  case 0:
    console.log("December");
    break;
  default:
    console.log("Invalid entry");
    break;
}

if (month == 1) {
  console.log("January");
} else if (month == 2) {
  console.log("February");
} else if (month == 3) {
  console.log("March");
} else if (month == 4) {
  console.log("April");
} else if (month == 5) {
  console.log("May");
} else if (month == 6) {
  console.log("June");
} else if (month == 7) {
  console.log("July");
} else if (month == 8) {
  console.log("August");
} else if (month == 9) {
  console.log("September");
} else if (month == 10) {
  console.log("October");
} else if (month == 11) {
  console.log("November");
} else if (month == 12 || month == 0) {
  console.log("December");
}

if (month == 0 || month == 12 || month == 1 || month == 2) {
  console.log("Winter");
} else if (month > 2 && month < 6) {
  console.log("Spring");
} else if (month > 5 && month < 9) {
  console.log("Summer");
} else if (month > 8 && month < 12) {
  console.log("Autumn");
} else {
  console.log("Invalid entry");
}
let day = -7;
day = Math.abs(day % 7);

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
  case 0:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid entry");
    break;
}


if (day == 1) {
  console.log("Monday");
} else if (day == 2) {
  console.log("Tuesday");
} else if (day == 3) {
  console.log("Wednesday");
} else if (day == 4) {
  console.log("Thursday");
} else if (day == 5) {
  console.log("Friday");
} else if (day == 6) {
  console.log("Saturday");
} else if (day == 7 || day == 0) {
  console.log("Sunday");
} else {
  console.log("Invalid entry");
}

if (day >= 1 || day <= 5) {
  console.log("Not weekend");
} else if (day == 6 || day == 7 || day == 0) {
  console.log("Weekend");
} else {
  console.log("Invalid entry");
}