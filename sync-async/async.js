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

const jspURI = "https://jsonplaceholder.typicode.com";

const getRequest = (endpoint, callbackFunction) => {
    let result = null;
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            // callbackFunction(null, data);
            result = data;
        }
        else if (request.readyState === 4) {
            // callbackFunction(`Error occured: ${request.status} - ${request.statusText}`);
            result = `Error occured: ${request.status} - ${request.statusText}`;

        }
    });

    request.open("GET", endpoint, false);
    request.send();
    return result;
}

console.log(1);

console.table(getRequest(`${jspURI}/users`));

console.log(2);

console.table(getRequest(`${jspURI}/todos?_limit=5`));

console.log(3);

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
