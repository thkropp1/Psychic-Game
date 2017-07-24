  <!-- Declare the variables -->
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var winCount = 0;
  var loseCount = 0;
  var guessesLeft = 9;
  // List of letters already guessed
  var guessesList = [];

/* Check if user input is correct */
    
    // Whenever a key is pressed, do the following actions.
    
    document.onkeyup = function(event) {

      var userInput = event.key;

      var rand = getRandomLetter(); // Get a random letter from the alphabet a to z
      console.log("Random letter is: " + rand);

      checkGuess(userInput, rand); // Check user input for a match

      var myContent =   // Print to screen
          "<p><h2>The Psychic Game</h2></p>" +
          "<p> Guess what letter I'm thinking of: " + userInput + "</p>" +
          "<p> The computer chose: " + rand + "</p>" +
          "<p> Wins: " + winCount + "</p>" +
          "<p> Losses: " + loseCount + "</p>" +
          "<p> Guesses Left: " + guessesLeft + "</p>" +
          "<p> Your guesses so far: " + guessesList.join(" ") + "</p>"

      var gameDIV = document.getElementById("game");
      gameDIV.innerHTML = myContent;

    } // document.onkeyup

function getRandomLetter() { <!-- Get random alphabet letter from a to z -->
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}


function checkGuess(userInput, rand) { <!-- Check user input for a match -->

  if (alphabet.indexOf(userInput) === -1) {
        alert("Wrong input. Please try again.");
        console.log("Wrong input. Please try again.");
      } else {

          guessesList.push(userInput); // add to list of guesses so far
          console.log("User input is: " + userInput);
          console.log("Guesses so far: " + guessesList.join(" "));
          
          if (userInput === rand) { /* if it's a correct guess */
                winCount++; // Add one to Wins
                console.log("Wins: " + winCount);
                guessesLeft = 9; // reset guessesLeft counter
                guessesList = []; // reset list of guesses
          } else {
                guessesLeft--; /* if it's an incorrect guess */
                console.log("How many guesses are left: " + guessesLeft);
          }  // 2nd else
      } // if alphabet.indexOf(userInput)

      if(guessesLeft === 0){ // No more guesses left
        loseCount++; // add 1 more to Losses
        guessesLeft = 9; // reset guessesLeft counter
        guessesList = []; // reset list of guesses
        console.log("Losses: " + loseCount);
      }
}

