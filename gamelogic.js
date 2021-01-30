function displayWordSoFar(word, guesses) {
  const lettersInWordArray = word.split("");

  let output = "";
  for (let index = 0; index < lettersInWordArray.length; index++) {
    const letterInWord = lettersInWordArray[index];
    const isLetterGuessed = guesses.includes(letterInWord);

    if (!isLetterGuessed) {
      output = output + "_ ";
    }

    if (isLetterGuessed) {
      output = output + letterInWord + " ";
    }
  }
  return output;
}

function isGameWon(word, guesses) {
  console.log("INPUT", "WORD:", word, "GUESSES:", guesses);
  const lettersInWordArray = word.split("");
  console.log("LETTERS IN WORD:", lettersInWordArray);
  for (let index = 0; index < lettersInWordArray.length; index++) {
    const letterInWord = lettersInWordArray[index];
    console.log("ONE LETTER AT A TIME:", letterInWord);
    const letterGuessed = guesses.includes(letterInWord);
    console.log("IS THIS LETTER GUESSED?", letterInWord, letterGuessed);
    if (!letterGuessed) {
      // If there is one letter not guessed, you have not won
      // So we can exit the loop an return if we find JUST one
      return false;
    }
  }

  // If we looped over all letters and we didn't find one
  // letter that was not guessed (we return false if it does)
  // that means all letters have been guessed!
  return true;
}

function isGameLost(word, guesses) {
  // WRITE ME
}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
};
