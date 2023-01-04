// Function Definition
let bill = 100;
const taxRate = 0.13;

function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
/* ----------------------------------- When you define a function the values within the brackets() is called parameter ----------------------------------- */
    // this is the function body
    console.log('Running Calculate Bill!!');
    const total = billAmount +  billAmount * taxRate + billAmount * taxRate;
    return total;
}

// Function Call. or **Run**
const wesTotal = 500;
const wesTaxRate = 0.3; 
const myTotal = calculateBill(wesTotal, wesTaxRate);
/* ------------------------------------ When you run/call or function and pass in a value, they're called arguments ----------------------------------- */

// const myTotal2 = calculateBill(100, 0.13);


// Function Definition
function sayHiTo(firstName) {
    return `Hello ${firstName}`;
}

// const greeting = sayHiTo('Wes')
// console.log(greeting)

// EXAMPLE 3 - Calculating Shared Bill with Britt + your share *50
// const Britt = 100;
// const myTotal3 = calculateBill(Britt + 50, 0.15);

// EXAMPLE 4 - 
function doctorize(name) {
    return `Dr. ${name}`;
};
/* ------------------------------------ both functions use name as a parameter but since it's only scoped within the function they both can use it ----------------------------------- */
function yell(name = '') {
    // setting the = 'Rick' we're putting a default name if no argument is passed in the parameter
    return `Hey ${name.toUpperCase()}`;
}

// console.log(yell(doctorize("Paul")))
/* ------------------------------------ returns "Hey DR. PAUL because we run yell() then use bedmass to call doctorize which is a value, and pass a name which is user inputted" ----------------------------------- */

// EXAMPLE 5 - Calculated Bill + Tip Rate
const myBill4 = calculateBill(100, undefined, 0.2);
console.log(myBill4)