const playerName ="Raka"
let credits =  23

credits = credits -10
// playerName = "Raka Sadiantara"

// if possible, use const. if not, use let.

// which variables below should be change from let to const?

// the customer want to order some stuff. here are the details:
const basePrice =520
const discount = 120
let shippingCost = 12
let shippingTime = "5-12 days"

// whops! turns out the shipping will be a bit more complex
shippingCost = 15
shippingTime = "7-14 days"

// calculating the full price
let fullPrice = basePrice - discount + shippingCost

// finaly,, notifying the customer
console.log("Total cost: " + fullPrice + ". it will arrive in " + shippingTime)



