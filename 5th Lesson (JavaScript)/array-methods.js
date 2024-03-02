const students = [
    {
        fullName: "Berkay Turna",
        age: 25,
        isDeleted: false,
        score: 90,
        isActive: true,
        courses: ["JavaScript", "React", "Node.js"],
        instructors: [
            { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
            { fullName: "Hicran Ertugral", topics: ["TypeScript", "Angular"] },
        ]
    },
    {
        fullName: "Cenk Grid Kaynak",
        age: 32,
        isDeleted: false,
        score: 85,
        isActive: true,
        courses: ["JavaScript", "React Native", ".Net Core"],
        instructors: [
            { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
            { fullName: "Korhan Kosece", topics: [".Net Core"] },
        ]
    },
    {
        fullName: "Ali Riza Taskiran",
        age: 24,
        isDeleted: false,
        score: 92,
        isActive: true,
        courses: ["Java", "Golang"],
        instructors: [
            { fullName: "Akin Kaldiroglu", topics: ["Spring", "C++"] },
            { fullName: "Buse Seker", topics: ["Problem Solving"] },
        ]
    },
    {
        fullName: "Mert Kirant",
        age: 23,
        isDeleted: false,
        score: 88,
        isActive: true,
        courses: ["Expressjs", "Node.js"],
        instructors: [
            { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
            { fullName: "Onder Tarım", topics: ["React Native"] },
        ]
    },
    {
        fullName: "Firat Can Tas",
        age: 24,
        isDeleted: false,
        score: 60,
        isActive: false,
        courses: ["Expressjs", "Node.js", ".Net Core"],
        instructors: [
            { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
            { fullName: "Onder Tarım", topics: ["React Native"] },
        ]
    },
    {
        fullName: "Baris Peker",
        age: 38,
        isDeleted: true,
        score: 75,
        isActive: false,
        courses: ["JavaScript", "HTML"],
        instructors: [
            { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
            { fullName: "Onder Tarım", topics: ["React Native"] },
        ]
    }
]
const isAnyStudentOver40 = students.some((student) => student.age > 40);
console.log("Older than 40: " + isAnyStudentOver40);

const scoreOver82 = students.some((student) => student.score > 82);
console.log("Higher score han 82: " + scoreOver82);

const isStillActive = students.every((student) => student.isActive);
console.log("All students active: " + isStillActive);


// forEach
// const forEachResult = students.forEach(
//     (student, index, arr) => {
//         console.log(`index ${index}: ${student.fullName}`);
//         return student;
//     }
// );

// console.log(forEachResult); /* undefined */

//map
// const newStudents = students.map(
//     student => {
//        return student.fullName;
//     }
// )

// console.log(newStudents);
// console.log(newStudents.length);


//filter
// console.log(
//     students.filter(student => {
//         if (student.age < 30) {
//             return true;
//         }
//         else {
//             return false;
//         }
//     })
// );
// console.log(
//     students.filter(student => student.age < 30)
// );
// console.log(
//     students.filter(student => !student.isDeleted && student.isActive)
// );

// const oldStudents = students.filter(student => student.age > 30);
// console.log(oldStudents);

const numbers = [1, 5, 3, 9, 7, 10];
const overZero = numbers.every((num) => num > 0);
console.log(overZero);