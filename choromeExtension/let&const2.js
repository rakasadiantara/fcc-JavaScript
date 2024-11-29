// setting the stages
const player = "Raka"
const opponent = "Eca"
const game = "AmazingFighter"

let points=0
let hasWon = false

// PLAYING THE GAME
points +=100
hasWon = true

// ANNOUNCING THE WINNER
if(hasWon){
    console.log(`${player}  got  ${points}  points and won the ${game} game!`)

} else {
    console.log(`The winner is ${opponent }!${ player }lost the game`)
}

// go through all variables and decide if they shoul be let or const
// change the console logs to use template string instead of double quotes