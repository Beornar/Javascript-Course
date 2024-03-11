// const request = new XMLHttpRequest();

// request.addEventListener("readystatechange",
// () => {
//     if(request.readyState === 4 && request.status === 200){
//         console.log(request.responseText);
//     }
//     else if(request.readyState === 4){
//         console.warn(`Error occurred: ${request.status} - ${request.statusText}`);
//     }
// });

// request.open("GET", "https://jsonplaceholder.typicode.com/comments/1");
// request.send();

// const jspURI = "https://jsonplaceholder.typicode.com";

// const getRequest = (endpoint, callbackFunction) => {
//     let result = null;
//     const request = new XMLHttpRequest();

//     request.addEventListener("readystatechange", () => {
//         if (request.readyState === 4 && request.status === 200) {
//             const data = JSON.parse(request.responseText);
//             // callbackFunction(null, data);
//             result = data;
//         }
//         else if (request.readyState === 4) {
//             // callbackFunction(`Error occured: ${request.status} - ${request.statusText}`);
//             result = `Error occured: ${request.status} - ${request.statusText}`;

//         }
//     });

//     request.open("GET", endpoint, false);
//     request.send();
//     return result;
// }

// console.log(1);

// console.table(getRequest(`${jspURI}/users`));

// console.log(2);

// console.table(getRequest(`${jspURI}/todos?_limit=5`));

// console.log(3);



// console.log("Hello World!!!");

// getRequest(`${jspURI}/users`, (err, res) => {
//     if (err) {
//         console.error(err);
//     }
//     else {
//         console.table(res);
//     }
// });
// console.log("Hello World!!!");

// getRequest(`${jspURI}/todos?_limit=5`, (err, res) => {
//     if (err) {
//         console.error(err);
//     }
//     else {
//         console.table(res);
//     }
// });

// console.log("Hello World!!!");



/////////////////////////////////////////////////////////////

// const jspURI = "https://jsonplaceholder.typicode.com";

// const getPromise = (endpoint) => {

//     return new Promise((resolve, reject) => {
//         const request = new XMLHttpRequest();

//         request.addEventListener("readystatechange", () => {
//             if (request.readyState === 4 && request.status === 200) {
//                 const data = JSON.parse(request.responseText);
//                 resolve(data);
//             }
//             else if (request.readyState === 4) {
//                 reject(`Error occured: ${request.status} - ${request.statusText}`);

//             }
//         });

//         request.open("GET", endpoint);
//         request.send();
//     })
// }

// getPromise(`${jspURI}/users/1`).then(data => {
//     console.log(data);
//     return getPromise(`${jspURI}/users/2`)
// })
//     .then(data => {
//         console.log(data);
//         return getPromise(`${jspURI}/users/3`)
//     }).then(data => console.log(data))
//     .catch(err => console.log(err))
//     .finally(() => console.log("All Done"));


/////////////////////////////////////////////////////////////



const jspURI = "https://jsonplaceholder.typicode.com";

const newToDo = {
    userId: 2,
    title: "Cenk Kaynak",
    completed: true
};

const updateToDo = {
    completed: true,
    title: "Changed the title!!!"
};

fetch(`${jspURI}/todos/`).then((response) => response.json()).then((json) => console.log(json));

fetch(`${jspURI}/todos/`, {
    method: "POST",
    body: JSON.stringify(newToDo)
})
    .then(response => {
        if (response.ok && response.status === 201) {
            return response.json();
        }
        else {
            console.log(`Error occured: ${response.status}`);
        }
    })
    .then(data => console.log(data));

fetch(`${jspURI}/todos/201`, {
    method: "DELETE",
})
    .then(data => console.log(data));

fetch(`${jspURI}/todos?userId=2`)
    .then((response) => response.json())
    .then((json) => console.log(json))

fetch(`${jspURI}/todos/1`, {
    method: 'PUT',
    body: JSON.stringify(updateToDo)
})
    .then((response) => response.json())
    .then((json) => console.log(json));