//from 52 cards
//array shapes

//array numbers
//randomly generate 16 cards within object 

//For each card generated we need to check if that card exists in the pile 1 or pile 2.

//player vs computer game starts


//randomly generated 1st card for user vs 1st computer
//checks priority
//compare using logic
//add to stack user or computer
//use .length to see who wins 


const shapes = ["hearts", "spades", "diamonds", "clubs"]
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,15]

// let cardsPlayer1 = [];
// let cardsPlayer2 = [];


function generateDeck (cardsPlayer1, cardsPlayer2) {
    while (cardsPlayer1.length < 16) {
        let shape = shapes[Math.floor((Math.random() * 4)) ]
        let num = numbers[Math.floor(Math.random() * 13)]
        let identicalCard1= cardsPlayer1.filter(card => card[0] === num && card[1] === shape)
        let identicalCard2 = cardsPlayer2.filter(card => card[0] === num && card[1] === shape)
        if(identicalCard1.length === 0 && identicalCard2.length === 0 ){
            cardsPlayer1.push([num, shape])
        }
        

    }  
    return cardsPlayer1

}

let lucyCards = []
let computerCards = []

lucyCards = generateDeck(lucyCards, computerCards)
cardsPlayer2 = generateDeck(computerCards, lucyCards)

console.log(lucyCards)
console.log(computerCards)


function checkCards(cardsPlayer1, cardsPlayer2) {
        for(let i = 0; i<16; i++){
            if(cardsPlayer1[0][0]> cardsPlayer2[0][0]){
                cardsPlayer1.push(cardsPlayer2.shift())
                cardsPlayer1.push(cardsPlayer1.shift())
                console.log("Player1 wins")
              
            } else {
                cardsPlayer2.push(cardsPlayer2.shift())
                cardsPlayer2.push(cardsPlayer1.shift())
                console.log("Player2 wins!")
        
            }}
        
    if(cardsPlayer1.length > cardsPlayer2.length){
        console.log("Player 1 wins this round")
    } else {
        console.log("Computer wins this round")
    }
}

checkCards(lucyCards, computerCards)


// let cards = [ [ 4, 'clubs' ],  [ 4, 'diamonds' ],
//   [ 7, 'hearts' ], [ 6, 'clubs' ],
//   [ 1, 'clubs' ],  [ 6, 'clubs' ],
//   [ 10, 'clubs' ], [ 3, 'spades' ],
//   [ 11, 'clubs' ], [ 12, 'diamonds' ],
//   [ 3, 'spades' ], [ 4, 'diamonds' ],
//   [ 7, 'spades' ], [ 7, 'hearts' ],
//   [ 8, 'clubs' ],  [ 11, 'clubs' ]
// ]

// console.log(cards.includes([ 7, 'hearts' ]))