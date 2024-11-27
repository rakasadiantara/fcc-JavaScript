
// function saveLead(){
//     console.log("hello")
// } 
// ini digunakan ketika di html  berisikan onclick. bisa juga dengan cara tidak diisikan namun menggunakan addEventListener.
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

const ulEl = document.getElementById("ul-el")



inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value) // mengambil value dari input
    // console.log(myLeads)
    inputEl.value = ""
    renderLeads()
})

// log out the items in the myLeas array using a for loop
function renderLeads(){
let listItems=""

for (let i= 0; i<myLeads.length; i++){
    //ulEl.innerHTML += "<li>" +  myLeads[i] + "</li> " // pakai innerHTML daripada textContent (cara pertama)

    // cara yang kedua : create the element
    // set text content
    // append to ul
    // const li = document.createElement("li")
    // li.textContent = myLeads[i]
    // ulEl.append(li)

    listItems +="<li>" + "<a href='"+myLeads[i]+ "'>"+myLeads[i]+"</a>"+ "</li>"
}

ulEl.innerHTML = listItems // cost dom nya lebih kecil karena hanya sekali doang, kalau di dalam loop dia jadi berkali"
}