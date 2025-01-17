const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});






class Cards {

    constructor(name) {
        this.name = name
        this.cards = []
        this.shapes = ["hearts", "spades", "diamonds", "clubs"]
        this.numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,15]
    }

    generateCards () {
      while (this.cards.length < 16) {
        let shape = this.shapes[Math.floor((Math.random() * 4)) ]
        let num = this.numbers[Math.floor(Math.random() * 13)]
        let identicalCard = this.cardsPlayer1.filter(card => card[0] === num && card[1] === shape)
        if(identicalCard.length === 0){
            this.cards.push([num, shape])
        }
    }  
    }
}

class Game {

    constructor(rounds) {
        this.rounds = rounds
        this.score1 = 0;
        this.score2 = 0;
    }

    play(player1, player2){
      for(let i =0; i< this.rounds; i++){
        for(let i = 0; i<16; i++){
            if(player1.cards[0][0]> player2.cards[0][0]){
                player1.cards.push(player2.cards.shift())
                player1.cards.push(player1.cards.shift())
                console.log("Player1 win")
              
            } else {
                player2.cards.push(player2.cards.shift())
                player2.cards.push(player1.cards.shift())
                console.log("Player2 wins!")
        
            }}
            if(cardsPlayer1.length > cardsPlayer2.length){
               console.log("Player 1 wins this round")
               score1 ++
            } else {
               console.log("Computer wins this round")
               score2 ++
            }
          }
          }


    
    }


readline.question("How many rounds would you like yo play?", (round) => {console.log(round)});

const player1 = Cards.generateCards()
const player2 = Cards.generateCards()
const newGame = Game(player1, player2)

console.log(newGame)