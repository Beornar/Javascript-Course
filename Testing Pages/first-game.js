const randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
  const guess = parseInt(document.getElementById("guessField").value);
  const message = document.getElementById("message");
  
  if (guess === randomNumber) {
    message.textContent = "Yeeey. You done it!";
    message.style.color = "green";
  } else if (guess < randomNumber) {
    message.textContent = "Try lower number!";
    message.style.color = "red";
  } else {
    message.textContent = "Try higher number!";
    message.style.color = "red";
  }
}
