// use .innerHTML to render a buy! button inside div container
 const containerEl = document.querySelector(".container")

//  containerEl.innerHTML = "<button>"+ "Buy" +"</button>"
 containerEl.innerHTML = "<button onclick='buy()'>Buy </button>"

 // when clicked, render a paragraph under the button (in the container)
 // that says "thank you for buying!"

 function buy() {
    containerEl.innerHTML += "<p> thanks you for buying</p>"
 }