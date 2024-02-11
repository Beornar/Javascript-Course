let string = "Benim adım Cenk, progralama çalışıyorum.";
let len = string.length;
let char = 0;

// while (char < len) {
//   if (string.charAt(char) === "," || string.charAt(char) === " ") {
//     char++;
//     continue;
//   }
//   console.log(string.charAt(char));
//   char++;
// }

for (let i = len; i >= 0; i--) {
  console.log(string.charAt(i));
}

while (len >= 0) {
  console.log(string.charAt(len));
  len--;
}

for (let i = 0; i < string.length; i++) {
  if (i % 5 == 0) {
    console.log(i + ": " + string.charAt(i));
  }
}

while (char < string.length) {
  if (char % 5 == 0) {
    console.log(string.charAt(char), char);
    char++;
    continue;
  }
  char++;
}

for (let i = 0; i < string.length; i = i + 2) {
  console.log(string.charAt(i), i);
}

while (char < string.length) {
  if (char % 2 == 0) {
    console.log(string.charAt(char), char);
    char = char + 2;
    continue;
  }
  char = char + 2;
}
