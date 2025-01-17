# War Card Game

This project allows users to play the War Card Game against a computer.
The code prompts from the user the number of rounds they would like to play, then the game begins.
16 cards are randomly assigned to the user and 16 to the computer. The code loops through each top card from the computer and user. Whoever has the card with the highest value wins. In the case of a draw between the computer and player, the next card in their pile is evaluated, whoever has the card with highest priority wins all four cards.

## Installation & Usage

To play the the game the dependency `prompt-sync` is required.

1. Run `npm install` to download dependencies.
2. Run `node object.js`
3. Enjoy the game !
4. Once the chosen number of rounds is complete to play again run `node object.js`

## Technologies

This application was built using Javascript in the Node (v20.14.0) runtime environment.

## Process

1. Started with pseudo code to break down our problem
2. Wrote down functions
3. Included loops
4. Tested the functions
5. Created classes
6. Tested the classes
