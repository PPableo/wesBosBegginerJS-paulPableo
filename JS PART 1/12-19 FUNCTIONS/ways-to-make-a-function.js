// First Class Citizen

// const age = 100;
// const cool = true;

// function doctorize(firstName) {
//     return `Dr. ${firstName}`
// }

// Anon Function
// NOTE: we defined this function with no name; hence anonymous function
// function (firstName) {
//     return `Dr. ${firstName}`
// }

// Function Expression 
// NOTE: Function expression is where you store a function as a value in a variable
// const doctorize = function(firstName = 'Dr.Doom') {
//     return `Dr. ${firstName}`
// }

// Arrow Function

/* -------------------------------- EXAMPLE 1 ------------------------------- */
// NOTE: This is a regular way to define it ES5
// function inchToCM(inches) {
//     return inches * 2.54;
// }

// NOTE: This is an implicit return where the we type out return
// const inchToCM = (inches) => {
//     return inches * 2.54;
// }

// NOTE: this is an explicit return where it returns without return or anything ES6
// const inchToCM = inches => inches * 2.54;

/* -------------------------------- EXAMPLE 2 ------------------------------- */
// NOTE: Regular Function
// function add(a, b = 3) {
//     const total = a + b;
//     return total;
// }

// NOTE: This is arrow function variation
// const add = (a, b = 3) => a + b;

/* -------------------------------- EXAMPLE 3 ------------------------------- */
// NOTE: Returning an object

// NOTE: This is non arrow function
// function makeABaby(first, last) {
//     const baby = {
//         name: `${first} ${last}`,
//         age: 0
//     }
//     return baby
// }

// NOTE: This is an implicit return Fat Arrow Function
// const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });

// IIFE
// NOTE: Immediately Invoked Function Expression

// (function(age) {
//     console.log('Running the Anon Function');
//     return `You are cool and age ${age}`;
// })(10);

// Methods
// NOTE: A method is a function that lives inside of an object

/* -------------------------------- EXAMPLE 1 ------------------------------- */
const wes = {
    name: 'Wes Bos',
    // Method
    sayHi: function() {
        console.log('Hey Paul');
        return 'Hey Paul';
    },
    // Short hand Method
    yellHi() {
        console.log('HEY PAUL');
    },
    // Arrow Function
    whisperHi: () => {
        console.log('Hi Paul, Im a mouse')
    }
}

// Callback Functions
// NOTE: when something happens run this, a function that gets passed into another function that the browser calls back in a different time
// Click Callback
const button = document.querySelector('.clickMe');

function handleClick() {
    console.log('Great Click!');
}
button.addEventListener(`click`, handleClick);

// Timer Callback
setTimeout(function() {
    console.log('Done! Time to eat!');
}, 1000);

// You can also use arrow function in this Timer Callback