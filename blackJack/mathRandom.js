let randomNumber = Math.random() *6

let floorNumber = Math.floor(4.45675)

// let mixedNumber = Math.floor(Math.random()*6) + 1

console.log(randomNumber, floorNumber)

console.log(mixedNumber)

function rollDice() {
    let mixedNumber = Math.floor(Math.random()*6) + 1
    
    return mixedNumber
}
console.log(rollDice())