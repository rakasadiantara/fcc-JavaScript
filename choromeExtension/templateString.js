// template strings/literals
// this can make we write code in new line 
// and code will run with a new line too or multiple line

const recipient= "James"

// Create a new variable, sender, and set its value to your name

const sender = "Booby"

//Refactor the email string to use template stringsinstead of
const email = "Hey " + recipient + "! How is it going? Cheers Raka"


// Use your sender variable instead of "Raka"
let refactorEmail = `Hey ${recipient}! 
How is it going? 
Cheers ${sender}`

console.log(email)
console.log(refactorEmail)