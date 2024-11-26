// object and function
// create a person object that contains three keys: name, age, and country
// use yourselft as an example to set the values for name, age, and country.

// create a function, logData(), that uses the preson objest to create a string in the following format: 
// "Raka is 23 year old and lives in Indonesia"

// call the logData() function to verify that it works

let person = {
    name: "Raka",
    age: 23,
    country: "Indonesia"
}

function logData() {
    let intro = person.name + " is  " + person.age + " years old and lives in " + person.country
    return intro;
}

console.log(logData())

// if else
let age = 66
// less than 6 years old ->  free
// 6 ro 17 years old -> child  discount
// 18 to 26 years old -> student discount
// 27 to 66 years old -> full price
// over 66 year old -> senior citizen discount
// create a conditional statement (if/ else/ else if) that logs out the discount
// the passenger will get base upon the value of the age variable

if (age<6) {
    console.log("free")
} else if (age<=17){
    console.log("child discount")
} else if (age <= 26) {
    console.log("student discount")
} else if (age <= 66 ) {
    console.log("full price")
} else {
    console.log("senior citizen discount")
}

// loops & arrays
let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]

/* use a for loop to log the following to the console:
The 5 largest countris in the world:
- china
- India
- Unites States
- Indonesia
- Pakistan
*/

console.log("The 5 largest countries in the world:")
for (let i= 1; i<largeCountries.length; i++) {
    console.log("- "+ largeCountries[i])
}

// push pop unshift shift
let largeCountries2 = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]
// You need to help me fixup the LargeCountries array so that China and Pakistan are added back into theis respective place

// use push() and pop() and their counterparts unshift() and shift()
// google how to use unshift() and shift()

largeCountries2.shift()
largeCountries2.pop()
largeCountries2.push("Pakistan")
largeCountries2.unshift("China")
console.log(largeCountries2)

// logical operator
// if its Friday the 13th, log out this spooky face: 😥
// use the logical "AND operator" -> &&

let dayOfMonth = 13
let weekday = "Friday"

if (dayOfMonth === 13 && weekday ==="Friday") {
    console.log("😥")
} else {
    console.log("oh no")
}

// rock papers scissors

let hands = ["rock", "paper", "scissor"]

// create a function that returns a random item from the array

function randomHands() {
    // let random = Math.floor(Math.random()*3)
    randomHands= hands[Math.floor(Math.random()*3)]
    return randomHands
}

console.log(randomHands()) 

// sorting fruits

let fruit = ["🎃", "🍡","🎃", "🎃","🍡"]
let pumpkinShelf = document.getElementById("pumpkin-shelf")
let sateShelf = document.getElementById("sate-shelf")

// create a function that puts the pumpkin onto the pumpkinShelf and the sate onto the sateShelf. use a for loop, a conditional statement and textContent property

function sortFruit() {
    for (let j=0; j<fruit.length; j+=1){
        if (fruit[j] === "🎃") {
            pumpkinShelf.textContent += fruit[j]
        }
        else {
            sateShelf.textContent += "🍡"
        }
    }
}

sortFruit()
