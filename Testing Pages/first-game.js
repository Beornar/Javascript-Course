// Generate random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Function to check user's guess
function checkGuess() {
  const guess = parseInt(document.getElementById("guessField").value);
  const message = document.getElementById("message");
  
  if (guess === randomNumber) {
    message.textContent = "Congratulations! You guessed the correct number!";
    message.style.color = "green";
  } else if (guess < randomNumber) {
    message.textContent = "Too low. Try again!";
    message.style.color = "red";
  } else {
    message.textContent = "Too high. Try again!";
    message.style.color = "red";
  }
}
