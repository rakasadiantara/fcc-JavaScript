// let count = 0

// console.log(count)


// let myAge = 37;
// let humanDogRation= 8;

// let myDogAge= myAge * humanDogRation;

// let bonusPoints = 50
//  bonusPoints = bonusPoints +50
// bonusPoints= bonusPoints - 755

// bonusPoints= bonusPoints+ 45
// console.log(bonusPoints)

//------------------------------------------------
// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

// 1. grab the save-el paragraph and store it in a variable calle saveEl
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById('count-el')
console.log(countEl) 

let people = 0
function increment() {
    // people = people+1
    people += 1
    countEl.innerText = people
    console.log(people)
}

// 1. create a function, save(), which logs out the count when it's called

function save(){
    // 2. create a variable that contains both the count and the dash seprator
    // 3. render the variable in the saveEl using innerText
    // NB: make sure to not detele the existing content of the paragraph.
    let numberSave = people + " - "
    saveEl.textContent  += numberSave
    console.log(people)

    people = 0
    countEl.innerText = people
} 
// the diff of innerText and textContent is if textContent is readable also hidden element of text like spacing. but in inner text is not. 

// save()




















// ---------------------------
function countdown(){
    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
}
// setting up the race
countdown()
 // GO
 // players are running the race
 // race is finished

//setting up the race
countdown()

// -------------------
// just create first function
function myLogger() {
    console.log(42)
}

myLogger();

// ---------------
let lap1 =34
let lap2 = 33
let lap3 = 36

// create a function that logs out the sum of all the lap times

function sumLap(){
    totalLap=lap1+lap2+lap3
    console.log(totalLap)
}

sumLap()

// ---------------
let lapsCompleted = 0

// create a function that increment the lapsCompleted variable with one
// Run it three times
function lapsIncrement(){
    lapsCompleted = lapsCompleted +1
    // return lapsNow
}
lapsIncrement()
lapsIncrement()
lapsIncrement()
console.log(lapsCompleted)


// ----------------
let username ="per"

let notification = "You have tree new notifications"

console.log(notification+", "+username)

let messageToUser = notification + ", " + username

console.log(messageToUser)

// -------------------------------
// create two variable, name and greeting. The name variable should store your name, and the greeting should store " Hi my name is"

// create a third variable, myGreeting that contatenates the two strings
// Log myGreeting to the console.

let name = "raka"
let greeting = "Hi my name is "
let myGreeting = greeting + name

console.log(myGreeting)


// -----------------string vs number
let nama= 42
let salam = " hi my name is "
let salamSaya = salam + nama
console.log(salamSaya)

let point = 4
let bonusPoints = "10"
let total = point + bonusPoints
console.log(total) //string always wins

console.log(4+5)
console.log("2" + "4")
console.log("5" + 1)
console.log(100 + "100")