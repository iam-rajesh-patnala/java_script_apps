/* This is getting the element with the id of userInput. */
let userInput = document.getElementById('userInput');
/* This is getting the element with the id of gameResult. */
let gameResult = document.getElementById('gameResult');
/* This is generating a random number between 1 and 100. */
let randomNumber = Math.ceil(Math.random() * 100);

/**
 * The function checks the user's input against the random number and displays a message based on the
 * result.
 */
function checkGuess() {
    let userInputNumber = parseInt(userInput.value);

    if (userInputNumber > randomNumber) {
        gameResult.textContent = "You enter value is too high!";
        gameResult.style.backgroundColor = "orange";
    } else if (userInputNumber < randomNumber) {
        gameResult.textContent = "You enter value is too low!";
        gameResult.style.backgroundColor = "orange";
    } else if (userInputNumber === randomNumber) {
        gameResult.textContent = "Congratulations you won!";
        gameResult.style.backgroundColor = "green";
    } else {
        gameResult.textContent = "Please enter a valid number";
        gameResult.style.backgroundColor = "red";
    }
}