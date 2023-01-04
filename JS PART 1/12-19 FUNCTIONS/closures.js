/* --------------------------- Example 1 Closures --------------------------- */
// NOTE: Closures are the ability of a child function, or an inner function, to access variables from a higher level scope even after the functions have been called or closed or closed over
// function outer() {
//     const outerVar = 'Hey I am the outer Var!';
//     function inner() {
//         const innerVar = 'Hey I am an inner var!';
//         console.log(innerVar);
//         console.log(outerVar);
//     }
//     return inner;
// }

// const innerFn = outer();
// innerFn();

function createGreeting(greeting = '') {
    const myGreet = greeting.toUpperCase();
    return function(name) {
        return `${myGreet} ${name}`;
    }
}

const sayHello = createGreeting('hello');
const sayHey = createGreeting('hey');
console.log(sayHello('Paul'));
console.log(sayHello('Wes'));
console.log(sayHey('Britt'));

function createGame(gameName) {
    let score = 0;
    return function win() {
        score++;
        return `Your name ${gameName} score is ${score}`
    }
}

const hockeyGame = createGame('Hockey');
const soccerGame = createGame('Soccer');
