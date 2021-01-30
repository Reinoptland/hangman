const { keyIn } = require("readline-sync");
const { displayWordSoFar, isGameWon, isGameLost } = require("./gamelogic");

function game(word, guesses) {
  console.log("Dit heb je tot nu toe geraden: ", guesses);
  const wordSoFar = displayWordSoFar(word, guesses);
  console.log(wordSoFar);

  const gameWon = isGameWon(word, guesses);
  if (gameWon) {
    console.log("YOU WON!");
    // returning to make the game function stop running
    return;
  }

  const gameLost = isGameLost(word, guesses);
  if (gameLost) {
    console.log("YOU HAVE DIED...");
    // returning to make the game function stop running
    return;
  }

  // using keyIn to get on letter,
  // limit to limit the options of the user
  // caseSensitive to only get lowercase letters
  // check readline-sync docs for details
  const letter = keyIn("Raad een letter: ", {
    limit: "abcdefghijklmnopqrstuvwxyz",
    caseSensitive: true,
  });

  // voeg de geraden letter toe aan de array met guesses
  guesses.push(letter);

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
