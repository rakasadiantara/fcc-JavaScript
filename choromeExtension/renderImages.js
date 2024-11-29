// create function that renders the three team images
// use afor loop, tmplate strings, plus equal
// innerHTML to solve the challenge

const imgs = [
    "profile1.jpg",
    "profile2.jpg",
    "profile3.jpg",
]

const imagesEl = document.getElementById('container')
function render () {
    let images = ""
    for (i= 0; i<imgs.length; i++){
        images+= `
        <img class='team-img' src='${imgs[i]}'/>
        `
    }
    imagesEl.innerHTML = images // we using like this makes we not using doms manipulation repeat in for loop so cost its big for that
}

render()