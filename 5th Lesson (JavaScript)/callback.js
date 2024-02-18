const people = ["Ali", "Veli", "Mehmet"];

const eachPerson = (arr, callbackFunc) => {
    for (let i = 0; i < arr.length; i++){
        callbackFunc(arr[i],i)
    }
}

const sayHello = (person) => {
    console.log(`Hello ${person}`);
}

eachPerson(people,sayHello);