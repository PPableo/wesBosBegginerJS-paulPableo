// Function Definition
let bill = 100;
const taxRate = 0.13;


function calculateBill() {
    // this is the function of the body
    console.log('Running Calculate Bill')
    const total = bill * 1 + taxRate;
    return total;
    }

    // Function call or run
const myTotal = calculateBill();
// console.log(`Your Total is $${myTotal}`)


console.log(`Your Total is $${calculateBill()}`)
// Using string interpolation to call/run function and display to screen (log)
// console.log(calculateBill)