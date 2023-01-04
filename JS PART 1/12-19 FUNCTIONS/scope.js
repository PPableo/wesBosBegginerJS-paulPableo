const first = 'Paul'
let second = 'Pableo'
age = 100; 

/* ------------------------- Example 1 Global Scope ------------------------- */
// function sayHi() {
//     console.log('Hi!')
// };

/* ------------------------ Example 2 Function Scope ------------------------ */
// NOTE: When variables are created inside of a function it's on available within that function
// NOTE: You can name variables the same name, what happens is it will looking within the function first then if it's not found it'll go up one level
// function go() {
//     const myAge =200;
//     const hair = 'blonde'
//     console.log(age);
//     console.log(myAge);
//     console.log(hair);
// }

// go();

/* -------------------------- Example 3 Block Scope ------------------------- */
function isCool(name) {
    let cool;
    if (name === 'Paul') {
        cool = true;
    }
    console.log(cool);
    return cool;
}

for(let i = 0; i < 10; i++) {
    console.log(i);
}

/* -------------------------- Example 4 Block Scope ------------------------- */
const dog = 'snickers';

function logDog(dog) {
    console.log(dog)
}

function go() {
    const dog = 'sunny';
    logDog('sunny');
}

go();

/* -------------------------- Example 5 Block Scope ------------------------- */
function sayHi(name) {
    function yell() {
        console.log(name.toUpperCase())
    }
    yell();
}

// yell();