document.querySelector("h1").innerHTML = "Welcome to my website!";
document.querySelector("ul").lastElementChild.innerHTML="cenk";
document.getElementsByTagName("li")[2].style.color = "red";
document.getElementById("title").innerHTML= "Changed by ID";
document.querySelector("#title").innerHTML = "Good Bye!"
document.querySelector("li a").innerHTML = "Google It!";
document.querySelectorAll("#list .item")[1].style.color = "gray";
document.querySelector("h1").style.fontSize = "5rem";
document.querySelector(".btn").style.backgroundColor = "red";

document.querySelector("button").classList.add("invisible");
document.querySelector("button").classList.toggle("invisible");

document.querySelector("h1").textContent = "Hello";
document.querySelector("h1").innerHTML = "<em> Hello </em>";

document.querySelector("a").setAttribute("href", "https://www.linkedin.com");