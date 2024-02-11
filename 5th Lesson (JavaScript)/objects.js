// const student = {
//     name : "Cenk",
//     surname: "Kaynak",
//     age: 32,
// };

// console.log(student.name);

// student.grade = "A";

// console.log(student);

// console.log(student["age"]);

// student.grade = "B";
// console.log(student);

// delete student.grade;
// console.log(student);

// let firstName = "Berkay";
// student.name = firstName;

// let lastName = "Turna";
// student.surname = lastName;

// console.log(student);

// let age = prompt("Enter your age");
// student.age = age;
// console.log(student);

const employee = {
  fullName: "Cenk Kaynak",
  age: 32,
  contact: {
    phone: "555-555 55 55",
    email: "cenk@cenkmail.com",
  },
  projects: [
    { manager: "Orkun Durmaz", projectName: "Login Page Creation" },
    { manager: "Önder Tarım", projectName: "Signup Page Debugging" },
  ],
  department: "Engineering Dept.",
};

console.log(employee);

console.log(employee.hasOwnProperty("contact"));
console.log(employee.hasOwnProperty("phone"));

console.log(employee.contact);
console.log(employee.projects[1].projectName);

employee.projects[2] = {
  manager: "Ali Rıza Taşkıran",
  projectName: "Javascript Exercises",
};
console.log(employee.projects);

console.log(employee.hasOwnProperty("projects"));
console.log(employee.contact.hasOwnProperty("email"));

const employeeKeys = Object.keys(employee);
console.log(employeeKeys);

const employeeProjectsValues = Object.values(employee.projects);
console.log(employeeProjectsValues);

const videoGame = {
  name: "Lies of P",
  Developer: "Neowiz Games",
  releaseDate: 2023,
  platforms: [
    "PC",
    ["Playstation 4", "Playstation 5"],
    ["Xbox One", "Xbox Series"],
  ],
};

videoGame.isInStock = true;
videoGame.genre = "Soulslike";
console.log(videoGame);

delete videoGame.genre;
console.log(videoGame);

const videoGamePlatformsEntries = Object.entries(videoGame.platforms);
console.log(videoGamePlatformsEntries);

const pet = {
  name: "Olaf",
  age: "3",
  gender: "Male",
  petType: "Cat",
  breed: "British Shorthair",
  owner: [
    { ownerFullName: "Cenk Kaynak", ownerContact: "222- 222 22 22" },
    { ownerFullName: "Belemir Kaynak", ownerContact: "333-333 33 33" },
  ],
};
console.log(pet);

pet.owner[1] = { ownerFullName: null, ownerContact: null };
// console.log(pet.owner);
