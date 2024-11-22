// Grab the welcome-el paragraph and store it in a variable called welcomeEl

// create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

// render the welcome message using welcomeEl.innerText

let welcomeEl = document.getElementById("welcome-el")
let name = "Raka"
let greeting = "selamat malam "

welcomeEl.innerText = greeting + name

// add an emoji to the end like 🚀
// must write code below here without change above
// hind : count = count + 1

// welcomeEl.innerText = welcomeEl.innerText +  " 🚀"
// it same with
welcomeEl.innerText += "🚀"