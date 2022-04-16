function logger() {
    // function body code to be executed
    console.log("My name is Sara")   
}
logger();
logger();

function fruitProcessor(apples, oranges) {
    // we use apples, oranges as a variab🇱🇸 
    console.log(apples, oranges);
    // create a variable

    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice; // return takes this value inside juice outside of func
}
// we call the func by passing in the real values 5, 0
// actual values of parameters are called argum
fruitProcessor(5, 0);

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice); // we catured and logged value
console.log(fruitProcessor(5, 0)); // we did NOT capture value, we just log the result
//  of running this func

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// declaring a func
function calcAge1(birthYear) {
    //const age = 2037 - birthYear;
    // return age;
    return 2037 - birthYear;
}

// we now call func
const age1 = calcAge1(1991);
console.log(age1);

// func 😑 expression

// const age2 = calcAge2(1991);
const calcAge2 = function(birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);

// the diff
const totalApples = fruit(3);
function fruit(apple) {
    return 5 - apple;   
}
//const totalApples = fruit(3);
console.log(totalApples);

// this is hoisting
// IIFE...Immediately Invoked Function Expressions
(function() {
    alert(`I've run - but can't be run again because I'm immediately invoked at runtime,
           leaving behind only the result I generate`);
 }());
 
 (function() {
    alert("This is IIFE too.");
 })();
 
 (function(message) {
    alert(message);
 }("Hello World!"));

 let example = (function() {
    return 42;
 }());
 console.log(example); // => 42

 (() => console.log("Hello!"))(); // => Hello!
 