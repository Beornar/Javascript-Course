// const people = ["Ali", "Veli", "Mehmet"];

// const eachPerson = (arr, callbackFunc) => {
//     for (let i = 0; i < arr.length; i++) {
//         callbackFunc(arr[i], i)
//     }
// }

// const sayHello = (person) => {
//     console.log(`Hello ${person}`);
// }

// eachPerson(people, sayHello);

// function removeFirstTwo(list) {
//     const [first, second, ...newList] = list;
//     return newList;
// }

// const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const sourceWithoutFirstTwo = removeFirstTwo(source);
// console.log(sourceWithoutFirstTwo);

const students = ["Berkay", "Cenk", "Mert", "Orkun", "Hicran", "Buse", "Onder"];
// let newStudents = [];

// const ourOwnForEach = (arr, callbackFn) => {
//     for (let index = 0; index < arr.length; index++) {
//         callbackFn(arr[index], index, arr);
//     }
// }

const ourOwnFilter = (arr, callbackFn) => {
    const newArr = [];
    for (let index = 0; index < arr.length; index++) {
        const result = callbackFn(arr[index], index, arr);
        newArr.push(result);
    }
    return newArr;
}
// const logElementWithIndex = (element, index) => {
//     if (index % 2 === 0) {
//         // console.log(`index ${index}: ${element}`);
//         students.push(element);
//         console.log(students);
//     }
// }

const studentsUpperCase = ourOwnFilter(students, student => student.toUpperCase());
console.log(studentsUpperCase);

const mapResult= ourOwnFilter(students, (student, index) => {
    if (index % 2 === 0) {
        return student;
    }else{
        return students.pop();
    }
})

console.log(mapResult);

// ourOwnForEach(students, logElementWithIndex);

// ourOwnForEach(
//     ["Ahmet", "Mehmet", "Furkan"],
//     (student, index) => console.log(`index ${index}: ${student}`)
// )

// ourOwnForEach(students, student => console.warn(student));