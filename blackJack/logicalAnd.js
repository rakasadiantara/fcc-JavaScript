let hasCompletedCourse = true
let givesCertificate = true

// if (hasCompletedCourse===true){
//     if (givesCertificate===true) {
//         generateCertificate()
//     }
// }

if (hasCompletedCourse===true && givesCertificate===true){
    generateCertificate()
}

function generateCertificate() {
    console.log(" Generating certificate")
}

// challenge 

let hasSolvedChallenge = false
let hasHintLeft = false

// create an if statement that checks that both variables are false
// if so run the showSolution() function
if (hasSolvedChallenge === false && hasHintLeft === false) {
    showSolution()
}

function showSolution() {
    console.log("showing the solution")
}