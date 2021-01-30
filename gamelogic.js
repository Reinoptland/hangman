function displayWordSoFar(word, guesses) {
  return word
    .split("") // ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"]
    .map((letter) => (guesses.includes(letter) ? `${letter} ` : "_ ")) // ["j ", "a ", "_ ", "a ", "_ ", "_ ", "_ ", "_ ", "_ ", "_ "]
    .join(""); // "j a _ a _ _ _ _ _ _"
}

function isGameWon(word, guesses) {
  const letterNotGuessed = word
    .split("") // // ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"]
    .find((letter) => !guesses.includes(letter));

  return letterNotGuessed === undefined; // if there is no letter not guessed, we won
}

function isGameLost(word, guesses) {
  const mistakeCount = countMistakes(word, guesses);

  const MAX_MISTAKE_COUNT = 7;
  if (mistakeCount >= MAX_MISTAKE_COUNT) {
    return true;
  } else {
    return false;
  }
}

function countMistakes(word, guesses) {
  return guesses.filter((guess) => {
    if (!word.includes(guess)) {
      return true; // this is letter is not guessed, count it
    } else {
      return false; // this letter was guessed, don't count it
    }
  }).length;
}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
  countMistakes: countMistakes,
};
