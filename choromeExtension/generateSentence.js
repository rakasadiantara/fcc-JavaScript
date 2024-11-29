// the generateSenctence(desc, arr) takes two parameter: a description and an array.
// it should return a string based upon the description and array.

// example 1: if you pass in "Largest countries", and ["Chine", "India", "USA"]
// it should return the string: "The 3 largest countries are China, India, USA"

//example 2: if you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// use both a for loop and a template string to solve the challenge\

function generateSentence(desc, arr){
    let items=""
    const lastIndex = arr.length-1
    for (i=0;i<arr.length; i++){
        if (i===lastIndex){
            items += arr[i] +"."
        }else {
            items += arr[i] + ", "
        }
        
    }
    return `The ${arr.length} ${desc} are ${items}`
}
let sentence = generateSentence("best beach", ["padang bai", "kuta"])
console.log(sentence) 
