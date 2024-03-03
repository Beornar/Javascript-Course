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

const findStudent = students.find((student) => student.fullName === "Cenk Grid Kaynak");
console.log(findStudent);

const findStudentIndex = students.findIndex((student) => student.fullName === "Cenk Grid Kaynak");
console.log(findStudentIndex);

const findCourse = students.find((student) => student.courses.includes("React"));
console.log(findCourse);

const sortByScore = students.sort((student1, student2) => student1.score - student2.score);
console.log(sortByScore);

const sortByName = students.sort((student1, student2) => {
    if (student1.fullName.toLowerCase() < student2.fullName.toLowerCase()) {
        return -1;
    } else if (student1.fullName.toLowerCase() > student2.fullName.toLowerCase()) {
        return 1;
    } else return 0;
});
// same sort by ternary
// const sortByName = students.sort((student1, student2) => student1.fullName > student2.fullName ? 1:-1)
console.log(sortByName);

const activeStudents = students.reduce((acc, currentValue) => {
    if (currentValue.isActive) {
        acc.push(currentValue.fullName);
    } return acc;
}, [])
console.log(activeStudents);
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

const numbers = [3, 9, 7, 6, 8, 10, 20, 23, 89, 97];

const evenNumbers = numbers.filter((num) => num % 2 == 0);
console.log(evenNumbers);

const multipliedEvenNumbers = evenNumbers.map((num) => num * 5);
console.log(multipliedEvenNumbers);

const finalNumbers = multipliedEvenNumbers.reduce((acc, currentValue) => acc + currentValue, 0);
console.log(finalNumbers);