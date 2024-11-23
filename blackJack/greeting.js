let sentence = ["Hello ", "My ", "Name ", "is ", "Raka"]
let greetingEl = document.getElementById("greeting-el")


for ( i = 0; i < sentence.length; i++){
    greetingEl.textContent += sentence[i]
    console.log(sentence[i])
}