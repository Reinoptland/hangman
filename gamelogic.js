function displayWordSoFar(word, guesses) {
  // DOEL: displayWordSoFar
  // word = "javascript" guesses = [];
  // -> "_ _ _ _ _ _ _ _ _ _ "
  // word = "javascript" guesses = ["q", "w", "e", "a", "t"];
  // -> "_ a _ a _ _ _ _ _ t "
  // STRATEGIE:
  // Een string aan elkaar plakken
  // Door over elke letter in het woord heen te loopen
  // Zit die letter er niet in: plak "_ " aan de string
  // Zit die letter er wel in: plak "<letter> " aan de string
  // - [ ] zet het eerste testje op test.only (later weer weghalen)
  // - [ ] loggen: wat is word, wat is guesses
  // - [ ] javascript "splitten" word.split("") -> ['j','a','v','a','s','c','r','i','p','t']
  // - [ ] Maak een output variable (met let) met de waarde lege string
  // - [ ] een loop maken -> we loopen over ['j','a','v','a','s','c','r','i','p','t']
  // - [ ] voo elke van letters checken: zit de letter in guesses (guess.includes(letter))?
  // - [ ] if else
  // - [ ] zo nee: plak "_ " aan de output variable
  // - [ ] zo ja: plak "j " aan de output variable (niet j, maar de letter die we dan checken)
  // - [ ] klaar? -> onze ouutput string die we hebben gemaakt returnen
  // - [ ] Test geslaagd? haal test.only weg en zet het bij de volgende test erbij
}

function isGameWon(word, guesses) {
  // DOEL: isGameWon
  // word = "javascript" guesses = ["j", "a", "v", "s", "c", "r", "i", "p", "t"] -> true
  // word = "javascript" guesses = [], ["j", "a"] -> false
  // Strategie:
  // Kunnen we 1 letter vinden die je niet hebt geraden? return false
  // Kunnen niet 1 letter vinden die je niet hebt geraden return true
  // - [ ] loggen: wat is word & guesses
  // - [ ] word -> word.split(""): ["j", "a", "v","a", "s", "c", "r", "i", "p", "t"]
  // - [ ] loopen over dat array met de letters van het woord
  // - [ ] Voor elke letter in het woord
  // - [ ] Zit deze letter in guesses -> guesses.includes(letter)
  // - [ ] if in de loop
  // - [ ] in guesses true -> we gaan door
  // - [ ] in guesses false -> we stoppen: return false
  // - [ ] Zijn we aan het einde van de loop? aan het einde van de functie return true
}

function isGameLost(word, guesses) {
  // DOEL: isGameLost
  // word = "javascript" guesses = ["q", "w", "e", "y", "u", "o", "d"]; -> true
  // word = "javascript" guesses = ["q", "w", "e", "a", "t"]; -> false
  // STRATEGIE:
  // fouten tellen
  // 7 fout (of meer?) -> return true
  // minder dan 7 fout -> return false
  // - [ ] counter aanmaken -> start bij 0
  // - [ ] for loop over de guesses
  // - [ ] voor elke guess
  // - [ ] zit deze guess (letter) in het woord word.includes(guess)
  // - [ ] if
  // - [ ] Als true (we doen niets)
  // - [ ] Als false -> counter met 1 verhogen
  // - [ ] aan het eind van de functie een if statement maken
  // - [ ] if
  // - [ ] count is 7 -> return true
  // - [ ] count is minder dan 7 -> return false
}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
};
