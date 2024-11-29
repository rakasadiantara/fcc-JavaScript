const credit = 0
const exampleTruthy = 1

if (credit) {
    console.log(" lets go")
} else {
    console.log("you poor")
}

if (exampleTruthy){
    console.log("there is truthy")
} else {
    console.log(" is not truthy")
}

// exercise
console.log(Boolean(""))
console.log(Boolean("0"))
console.log(Boolean(100))
console.log(Boolean(null))
console.log(Boolean([0]))
console.log(Boolean(-0))