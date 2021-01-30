const { keyIn } = require("readline-sync");
const {
  displayWordSoFar,
  isGameWon,
  isGameLost,
  countMistakes,
} = require("./gamelogic");
const drawGallows = require("./gallows");

function game(word, guesses) {
  console.log("Dit heb je tot nu toe geraden: ", guesses);
  const wordSoFar = displayWordSoFar(word, guesses);
  console.log(wordSoFar);

  // using keyIn to get one letter,
  // using limit to limit the options of the user
  // caseSensitive to only get lowercase letters
  // check readline-sync docs for details
  const letter = keyIn("Raad een letter: ", {
    limit: "abcdefghijklmnopqrstuvwxyz",
    caseSensitive: true,
  });

  // voeg de geraden letter toe aan de array met guesses
  guesses.push(letter);

  const gameWon = isGameWon(word, guesses);
  if (gameWon) {
    console.log("YOU WON!");
    // returning to make the game function stop running
    return;
  }

  const mistakeCount = countMistakes(word, guesses);
  console.log(`Je mag nog ${7 - mistakeCount} fouten maken`);
  drawGallows(mistakeCount);

  const gameLost = isGameLost(word, guesses);
  if (gameLost) {
    console.log("YOU HAVE DIED...");
    // returning to make the game function stop running
    return;
  }

  // volgende ronde! we roepen game nog een keer aan
  game(word, guesses);
}

console.log(`
__________  
| /     |    ░██████╗░░█████╗░██╗░░░░░░██████╗░░░░░░██╗███████╗
|/     _o_   ██╔════╝░██╔══██╗██║░░░░░██╔════╝░░░░░░██║██╔════╝
|       O    ██║░░██╗░███████║██║░░░░░██║░░██╗░░░░░░██║█████╗░░
|      / \\   ██║░░╚██╗██╔══██║██║░░░░░██║░░╚██╗██╗░░██║██╔══╝░░
|            ╚██████╔╝██║░░██║███████╗╚██████╔╝╚█████╔╝███████╗
===========  ░╚═════╝░╚═╝░░╚═╝╚══════╝░╚═════╝░░╚════╝░╚══════╝
`);

game("javascript", []);
