# Hangman (met jest tests)

## In deze repo vind je

- Een starterkit om een galgje spel te maken (index.js)
- Test die je helpen de rest van de logica te schrijven (gamelogic.test.js)
- Een bestandje waar je je gamelogica kan schrijven (gamelogic.js)

## Installatie

```bash
$git clone <repo git url>
$cd hangman
$npm install
```

## Scripts

```bash
$npm run test # run jest once
$npm run test:watch # run jest in watch mdoe
$npm run start # start the game
```

## Hoe stop je het programma of jest in --watch mode?

Als je met `npm run start` of `npm run test:watch` het programma start gaat het (voor nu) oneindig door.
Je kan het programma stoppen door:

- Te klikken op je terminal
- `ctrl + c` (tegelijk) in te drukken

## Doelen

- [ ] Installeer de repo en probeer de scripts
- [ ] Probeer het programma uit, wat doet het tot nu toe?
- [ ] Lees de code
- [ ] Implementeer de game logica (laat de tests je helpen: `npm run test:watch`)
- [ ] Is de game logica geimplementeerd? Gebruik de functies dan in index.js
  - [ ] Zorg dat mensen letters kunnen raden
  - [ ] Hou bij in de guesses array welke letters mensen geraden hebben
  - [ ] Laat zien welke letters al geraden zijn met (displayWordSoFar)
  - [ ] Heeft iemand alle letters geraden? log dan dat ze gewonnen hebben
  - [ ] Heeft iemand meer 6 letters fout geraden? log dan hebben ze verloren
  - [ ] Stop het programma met `return` wanneer iemand gewonnen of verloren heeft
  - [ ] Heeft iemand nog niet gewonnen of verloren? Dan gaat het spel verder

## BONUS DOELEN (kies zelf uit wat je het leukst vindt!)

- [ ] Check of de gebruiker meer dan een letter tegelijk kiest
  - `a` mag wel
  - `ae` mag niet
- [ ] Geef een foutmelding wanneer iemand meer dan een letter kiest
      OF
- [ ] Maak het onmogelijk om meer dan een letter tegelijk in te voeren met
- [ ] Zorg ervoor dat gekke gebruikers het spel niet verliezen door hoofdletters te gebruiken
  - `A` gekozen? wordt: `a`
  - Is het woord `JavaScript`? wordt: `javascript`
- [ ] Hou bij hoeveel fouten (letters die niet in woord zitten) iemand al heeft gemaakt
- [ ] Teken voor elke extra fout een stukje galg:

1 fout:

```

|
|
|
|
|
===========
```

7 fouten:

```
__________
| /     |
|/     _o_
|       O
|      / \
|
===========
```

## Solutions / Branches / Files

- [main](https://github.com/Reinoptland/hangman) (starter)
- [gamelogica file](https://github.com/Reinoptland/hangman/blob/todolists/gamelogic.js) met "todolists" zodat je wat houvast hebt (wil je meer uitdaging? schrijf je eigen todolist)
- [solution-display-word-so-far](https://github.com/Reinoptland/hangman/tree/solution-display-so-far)
- [githistory voor display-word-so-far](https://github.githistory.xyz/Reinoptland/hangman/blob/solution-display-so-far/gamelogic.js)
- [solution-is-game-won](https://github.com/Reinoptland/hangman/tree/solution-is-game-won)
- [githistory voor is-game-won](https://github.githistory.xyz/Reinoptland/hangman/blob/solution-is-game-won/gamelogic.js)
- [solution-is-game-lost](https://github.com/Reinoptland/hangman/tree/solution-is-game-lost)
- [githistory voor is-game-lost](https://github.githistory.xyz/Reinoptland/hangman/blob/solution-is-game-lost/gamelogic.js)
- [bonus goals](https://github.com/Reinoptland/hangman/tree/solution-bonus)

EXTRA

Deze oplossing zijn in een hele korte vorm opgeschreven, leuk om te zien wat "kan"
Maar je eigen oplossing schrijven, ook al is die langer, is VEEL belangrijker.

- [githistory met rewrites voor game logica met map, filter, find](https://github.githistory.xyz/Reinoptland/hangman/blob/array-methods-rewrite/gamelogic.js)
