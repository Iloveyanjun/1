// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Keep track of the number of guesses
let guesses = 0;
let maxGuesses = 5; // Change to 3 if you want to give 3 guesses

function checkGuess() {
  // Get the user's guess
  var userGuess = parseInt(document.getElementById("guessInput").value);

  // Increase the number of guesses
  guesses++;

  // Get reference to the message element
  let messageElement = document.getElementById("message");

  // Check if the guess is correct
  if (userGuess === randomNumber) {
    messageElement.textContent =
      "Congratulations! You guessed the number in " + guesses + " guesses.";
    messageElement.style.color = "green";
    disableInput();
  } else if (guesses === maxGuesses) {
    messageElement.textContent =
      "Sorry, you've used all your guesses. The number was " +
      randomNumber +
      ".";
    messageElement.style.color = "red";
    disableInput();
  } else {
    var hint = userGuess < randomNumber ? "higher" : "lower";
    messageElement.textContent = "Incorrect! Try guessing " + hint + ".";
    messageElement.style.color = "black";
  }
}

function disableInput() {
  document.getElementById("guessInput").disabled = true;
  document.querySelector("button").disabled = true;
}
