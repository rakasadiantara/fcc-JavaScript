let data = [
    {
        player: "Jane",
        score: 52
    },
    {
        player: "Mark",
        score: 41
    }
]

// fetch the button from the DOM, store it in a variable
// use addEventListener() to listen for button clicks
// log Jane's score when the button is clicked (via data)

const logBtn = document.getElementById("log-btn")
let numOfData = 0

logBtn.addEventListener("click", function(){
    logBtn.textContent = `Log ${data[numOfData].player} is ${data[numOfData].score}`
})


