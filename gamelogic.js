function displayWordSoFar(word, guesses) {
  // - [x] zet je testje op test.only (later weer weghalen)
  // - [x] loggen: wat is word, wat is guesses
  console.log("WOORD TE RADEN:", word);
  console.log("GUESSES:", guesses);
  // DOEL:
  // WOORD: javascript, GUESSES: [] -> "_ _ _ _ _ _ _ _ _ _ "
  // WOORD: javascript, GUESSES: ['a', 'b'] -> "_ a _ a _ _ _ _ _ _ "

  // - [x] javascript "splitten" split() -> ['j','a','v','a','s','c','r','i','p','t']
  const lettersInWordArray = word.split("");
  console.log("ARRAY OF LETTERS", lettersInWordArray);
  // - [x] een loop maken -> ['j','a','v','a','s','c','r','i','p','t']
  let output = "";
  for (let index = 0; index < lettersInWordArray.length; index++) {
    const letterInWord = lettersInWordArray[index];
    console.log("1 LETTER OF WORD TO GUESS:", letterInWord);
    // - [x] checken: zit de letter in guesses?
    const isLetterGuessed = guesses.includes(letterInWord);
    console.log(letterInWord, "GERADEN?", isLetterGuessed);

    // - [ ] if else
    // - [x] zo nee: "_ "
    if (!isLetterGuessed) {
      output = output + "_ ";
    }

    // - [x] zo ja: "j " (niet j, maar de letter die we dan checken)
    if (isLetterGuessed) {
      output = output + letterInWord + " ";
    }
  }
  console.log(output);
  // - [x] klaar? -> onze string die we hebben gemaakt returnen
  return output;
}

function isGameWon(word, guesses) {
  // WRITE ME
}

function isGameLost(word, guesses) {
  // WRITE ME
}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
};
