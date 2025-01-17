const prompt = require("prompt-sync")({
  fake_val: "OPTIONAL CONFIG VALUES HERE",
});

class Cards {
  constructor(name) {
    this.name = name;
    this.cards = [];
    this.shapes = ["hearts", "spades", "diamonds", "clubs"];
    this.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15];
  }

  generateCards() {
    while (this.cards.length < 16) {
      let shape = this.shapes[Math.floor(Math.random() * 4)];
      let num = this.numbers[Math.floor(Math.random() * 13)];
      let identicalCard = this.cards.filter(
        (card) => card[0] === num && card[1] === shape
      );
      if (identicalCard.length === 0) {
        this.cards.push([num, shape]);
      }
    }
  }

  //   return this.cards
}

class Game {
  constructor(rounds) {
    this.rounds = rounds;
    this.score1 = 0;
    this.score2 = 0;
  }

  play(player1, player2) {
    for (let i = 0; i < this.rounds; i++) {
      for (let i = 0; i < 16; i++) {
        if (player1.cards[0][0] > player2.cards[0][0]) {
          player1.cards.push(player2.cards.shift());
          player1.cards.push(player1.cards.shift());
          console.log("Player1 win");
        } else if (player1.cards[0][0] === player2.cards[0][0]) {
          if (player1.cards[1][0] > player2.cards[1][0]) {
            player1.cards.push(player2.cards.shift());
            player1.cards.push(player1.cards.shift());
            player1.cards.push(player1.cards[1]);
            player1.cards.push(player2.cards[1]);
            player2.cards.splice(1, 1);
            player1.cards.splice(1, 1);

            console.log("Player2 wins!");
          } else {
            player2.cards.push(player2.cards.shift());
            player2.cards.push(player1.cards.shift());
            player2.cards.push(player1.cards[1]);
            player2.cards.push(player2.cards[1]);
            player2.cards.splice(1, 1);
            player1.cards.splice(1, 1);

            console.log("Player2 wins!");
          }
        } else {
          player2.cards.push(player2.cards.shift());
          player2.cards.push(player1.cards.shift());
          console.log("Player2 wins!");
        }
      }
      if (player1.cards.length > player2.cards.length) {
        console.log("Player 1 wins this round");
        this.score1++;
      } else {
        console.log("Computer wins this round");
        this.score2++;
      }
    }
    if (this.score1 > this.score2) {
      console.log(`${player1.name} wins this game`);
    } else {
      console.log(`${player2.name} wins this game`);
    }
  }
}

const round = prompt("How many rounds would you like to play?");

const game1 = new Game(round);

const name = prompt("What is your name?");
const player1 = new Cards(name);
const player2 = new Cards("Computer");

player1.generateCards();
player2.generateCards();

console.log(player1.cards);
game1.play(player1, player2);
