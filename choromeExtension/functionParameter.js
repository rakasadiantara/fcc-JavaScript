// const welcomeEl = document.getElementById("welcome-el")

// function greetUser(greeting, name, emoji) {
//     welcomeEl.textContent = `${greeting}, ${name} ${emoji}`
// }

// greetUser("howdy","Raka", "🖐")

// number as function parameters
function add (num1, num2){
    return num1+num2
}


console.log(add (3,4))
console.log(add (9,102))

// array as parameters
// create function, getFirst(arr) that returns the first item in the array
function getFirst(arr){
    return arr[0]
}


// call it with an arrayas an argument to verify that it works
console.log(getFirst([100,2,3,4,2,43]))