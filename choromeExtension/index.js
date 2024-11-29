
// function saveLead(){
//     console.log("hello")
// } 
// ini digunakan ketika di html  berisikan onclick. bisa juga dengan cara tidak diisikan namun menggunakan addEventListener.

let myLeads = []

let oldLeads = []

// myLeads = JSON.parse(myLeads)
// myLeads.push("facebook.com")

// myLeads = JSON.stringify(myLeads)

//myLeads = JSON.stringify(myLeads)

// myLeads = JSON.parse(myLeads)
// myLeads.push("www.epidermi.com")

// console.log(typeof myLeads)



const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

const ulEl = document.getElementById("ul-el")

// localStorage.setItem("myLead", "www.google.com")

// let leads = localStorage.getItem("myLead")
// console.log(leads)


const leadsFromLocalStorage= JSON.parse(localStorage.getItem("myLeads"))

const deleteBtn= document.getElementById("delete-btn")

const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

// const tabs = [
//     {url:"https://www.linkedin.com/in/rakasadiantara/" }
// ]

tabBtn.addEventListener("click", function(){
    // console.log(tabs[0].url)

    // Grab url of the current tab
    chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
      //console.log(tabs)
      myLeads.push(tabs[0].url)
      localStorage.setItem("myLeads", JSON.stringify(myLeads))
      render(myLeads)
    })

})

// log out the items in the myLeas array using a for loop
function render(leads){
    let listItems=""
    for (let i= 0; i<leads.length; i++){
        //ulEl.innerHTML += "<li>" +  myLeads[i] + "</li> " // pakai innerHTML daripada textContent (cara pertama)

        // cara yang kedua : create the element
        // set text content
        // append to ul
        // const li = document.createElement("li")
        // li.textContent = myLeads[i]
        // ulEl.append(li)

        // listItems +="<li>" + "<a target = '_blank' href='"+myLeads[i]+ "'>"+myLeads[i]+"</a>"+ "</li>"
        listItems +=`
        <li> 
        <a target = '_blank' href='${leads[i]}'>
            ${leads[i]}
        </a>
        </li>
        `
    }
    ulEl.innerHTML = listItems // cost dom nya lebih kecil karena hanya sekali doang, kalau di dalam loop dia jadi berkali"
}

deleteBtn.addEventListener("click", function(){
    console.log("double nih")
    localStorage.clear() // menghapus local storage
    myLeads = []
    render(myLeads)
})


inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value) // mengambil value dari input
    // console.log(myLeads)
    inputEl.value = ""

    // Save the myLeads array to local storage
    // PS: remember JSON.stringify()
    localStorage.setItem("myLeads", JSON.stringify(myLeads))


    render(myLeads)

    console.log(localStorage.getItem("myLeads"))
})

