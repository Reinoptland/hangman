function displayWordSoFar(word, guesses) {
  // - [x] zet je testje op test.only (later weer weghalen)
  // - [x] loggen: wat is word, wat is guesses
  console.log("WOORD TE RADEN:", word);
  console.log("GUESSES:", guesses);
  // DOEL:
  // WOORD: javascript, GUESSES: [] -> "_ _ _ _ _ _ _ _ _ _ "
  // WOORD: javascript, GUESSES: ['a', 'b'] -> "_ a _ a _ _ _ _ _ _ "

  // - [ ] javascript "splitten" split() -> ['j','a','v','a','s','c','r','i','p','t']
  const lettersInWordArray = word.split("");
  console.log("ARRAY OF LETTERS", lettersInWordArray);
  // - [ ] een loop maken -> ['j','a','v','a','s','c','r','i','p','t']
  // - [ ] checken: zit de letter in guesses?
  // - [ ] if else
  // - [ ] zo nee: "_ "
  // - [ ] zo ja: "j " (niet j, maar de letter die we dan checken)
  // - [ ] klaar? -> onze string die we hebben gemaakt returnen
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
