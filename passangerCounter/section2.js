// create two variables firstName and lastName
let firstName= "Raka"
let lastName = "Sadiantara"
// concatenate the two variables into a third variavle called fullName
let fullName = firstName +" " +lastName
// log fullName to the console
console.log(fullName)

// ----------------
let name = "Tara"
let greeting = "hi there"

// create a function that logs out "hi there, linda ! "when called

function greet(){
    console.log(greeting + ", " + name + "!")
}
greet()

// ----------------------------
let myPoints = 3

// create two function, add3Points() and remove1Point(), and have them add/remove points to /from the myPoints variable
function add3Points() {
    myPoints += 3
}

function remove1Point() {
    myPoints -= 1
}

// call the functions to that the line below logs out 10
add3Points()
add3Points()
add3Points()
remove1Point()
remove1Point()
console.log(myPoints)


// ---------- string & numbers
console.log("2"+ 2) // 22
console.log(11 + 7)// 18
console.log(6 + "5") // 65
console.log("my Points " + 5 + 9) // My Points 59
console.log(2 + 2)// 4
console.log("11" + "14")// 1114


// -----------------rendering error message
// when the user clicks the purchase button, render out
// "Something went wrong, please try again!" in the paragraph
// that has the id = "error"
let error = document.getElementById("error");

function errorMessage() {
    let message = "Something went wrong, please try again!"
    error.innerText = message
}


// ----- calculator challenge
let num1 = 8;
let num2 = 2;
let sum = 0;
let sumEl = document.getElementById("sum-el")
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

// create four function add(), substract(), divide(), multiply()
// call the correct funtion when the user clicks on one of the buttons
// perform the given calculation using num1 and num2
// render the result of the calculation in the paragraph with id="sum-el"

function add() {
    sum = num1 + num2
    sumEl.innerText = "Sum: "+ sum;
}
function substract() {
    sum = num1 - num2
    sumEl.innerText ="Sum: "+  sum;
}
function divide() {
    sum = num1 / num2
    sumEl.innerText ="Sum: "+  sum;
}
function multiply() {
    sum = num1 * num2
    sumEl.innerText ="Sum: "+  sum;
}

