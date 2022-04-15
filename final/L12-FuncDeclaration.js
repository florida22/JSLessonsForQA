/*Function - piece of code we can reuse over and over, fundamental building block in JS
*/
function logger() {
    // function body code to be executed
    console.log(`My name is Sara`)
}

// to reuse this func we invoke it with (), run it, or call it
logger(); // does not return anything, no value, no need to save it in variable
logger();

// we pass data into a function and they can also returne data
// functions are like machine, food processor returns🍹 

function fruitProcessor(apples, oranges) {
    // we use apples, oranges as a variables
    //console.log(apples, oranges) 
    // create a variable
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;  // 'return' takes this value inside 'juice' outside of function
}
// we call the function by passing in the real values 5,0
// actual values of parameters are called arguments
fruitProcessor(5,0);

// Where is the juice? Juice was returned form the function
// if we want to use the value function returned we store it
// into variable

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice); // we captured and loged value

// we didnt capture value, we just log the result of running this function
console.log(fruitProcessor(5,0));

// reuse function with diff output
const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);


// DECLARING a Function
function calcAge1(birthYear) {
    //const age = 2037 - birthYear;
    // return age;
    return 2037 - birthYear; // we can shorten it in 1 line
}
//we now call the func calcAge1(1991); // this will create a value
const age1 = calcAge1(1991); // we save this value in a variable
console.log(age1);

// function expression..function is just a value, it is not a type like a string, #
// if it is a value e can store it into a variable
const calcAge2 = function (birthYear) {
    return 2037 - birthYear; 
}
const age2 = calcAge2(1991);
console.log(age1, age2);

// the diff between func declaration and func expression is we can call
// func declarations before they are defined in a code

const totalApples = fruit(3);
function fruit(apple) {
    return 5 - apple;   
}
//const totalApples = fruit(3);
console.log(totalApples);

// this is hoisting