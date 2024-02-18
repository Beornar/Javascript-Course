const people = ["Ali", "Veli", "Mehmet"];

const eachPerson = (arr, callbackFunc) => {
    for (let i = 0; i < arr.length; i++) {
        callbackFunc(arr[i], i)
    }
}

const sayHello = (person) => {
    console.log(`Hello ${person}`);
}

eachPerson(people, sayHello);

function removeFirstTwo(list) {
    const [first, second, ...newList] = list;
    return newList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
console.log(sourceWithoutFirstTwo);