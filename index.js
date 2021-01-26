const { question } = require("readline-sync");

function game(guesses, woord) {
  console.log("Dit heb je tot nu toe geraden: ", guesses);

  const letter = question("Raad een letter: ");

  // voeg de geraden letter toe aan de array met guesses
  guesses.push(letter);

  // volgende ronde! we roepen game nog een keer aan
  game(guesses, woord);
}

game([], "javascript");
