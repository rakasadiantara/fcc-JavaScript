//1 create two variables, firstCard and secondCard
// set their values to a random number between 2-11
//2 create a variable, sum and set it to the sum of the two card

// let firstCard = 10
// let secondCard =11
let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard] // array - ordered list of items
let sum = firstCard + secondCard

let hasBlackJack = false
let isAlive = true

let message = ""

let messageEl = document.getElementById('message-el')

// let sumEl = document.getElementById('sum-el')
let sumEl = document.querySelector('#sum-el')

let cardsEl = document.querySelector('#cards-el')

function startGame() {
    renderGame()
}

function renderGame() {
    if (sum <= 20) {
        message = "Do you want to draw new card?"
    } else if ( sum === 21) {
        message = "Wohoooo. you got black jack!"
        hasBlackJack = true
    } else {
        message = "youre out of the game :("
        isAlive = false
    }
    // console.log(message)
    messageEl.textContent = message
    sumEl.textContent = "Sum: "+ sum

    // cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
    // cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    cardsEl.textContent = "Cards: " 
    // create a for loop that renders out all the cards instead just two
    for (i=0; i< cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }
}

function newCard() {
    console.log("drawing new car in the deck")
    let card = 7
    sum += card
    cards.push(card)
    renderGame()
    console.log(cards)
}

