// count to ten!

// we need to specify

// where shoud we start counting?
// where is the finish line?
// what's the step size we should use?

// start         finish         step size
for ( let count =10; count < 20; count += 1) {
    // console.log(count)
}


// try individual
for ( let number = 10; number<=100; number += 10){
    // console.log(number)
}

// array X for loop
let message =["hi you",
    "this is me",
    "how are you?",
    "bibi",
    "bubu"
]
for (let i = 0; i <message.length; i += 1) {
    console.log(message[i])
}
console.log(message)

// training

let cards = [7, 3,9,10,11,12,12,31]
for (i=0; i<cards.length; i++){ // i++ is equal with i+=1
    console.log(cards[i])
}