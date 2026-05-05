let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random()*100);
let attempts = 0;

function checkGuess() {
    let guessedNumber = parseInt(userInput.value);
    

    if (isNaN(guessedNumber) || guessedNumber < 1 || guessedNumber > 100){
        gameResult.textContent = "Provide a valid user input. ";
        gameResult.style.backgroundColor = "#1e217c";
        return;
    }

    attempts++;

    if (guessedNumber < randomNumber){
        gameResult.textContent = "Too Low! Try Again. ";
        gameResult.style.backgroundColor = "#1e217c";
    }
    else if (guessedNumber > randomNumber){
        gameResult.textContent = "Too High! Try Again. ";
        gameResult.style.backgroundColor = "#1e217c";
        
    }
    else{
        gameResult.textContent = "🎉 Correct! You guessed in " + attempts + " attempts"; 
        gameResult.style.backgroundColor = "green";
    }   
}

// function checkGuess() {
//     let guessedNumber = parseInt(userInput.value);

//     // ✅ Validate first
//     if (isNaN(guessedNumber) || guessedNumber < 1 || guessedNumber > 100) {
//         gameResult.textContent = "Enter a valid number between 1 and 100";
//         gameResult.style.backgroundColor = "#1e217c";
//         return; // stop execution
//     }

//     attempts++; // count only valid attempts

//     if (guessedNumber > randomNumber) {
//         gameResult.textContent = "Too High! Try Again.";
//         gameResult.style.backgroundColor = "#1e217c";
//     } 
//     else if (guessedNumber < randomNumber) {
//         gameResult.textContent = "Too Low! Try Again.";
//         gameResult.style.backgroundColor = "#1e217c";
//     } 
//     else {
//         gameResult.textContent = "🎉 Correct! You guessed in " + attempts + " attempts";
//         gameResult.style.backgroundColor = "green";
//     }
// }
