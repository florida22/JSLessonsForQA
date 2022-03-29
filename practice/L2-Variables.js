/* Lesson 2 - Variables = named space in a memory that holds data. As of ES6, 
to declare a variable, We use keyword: let( with let, variable can be reassigned,
and is mutable) and when we declare a variable with const keyword, it cannot be reassigned.
With the const keyword, declaration and initialization always need to happen 
together, because a const cannot be changed afterwards. */

let firstScore;
    firstScore = 22;
    firstScore = true;
    firstScore = 'something';

// Without variable it is almost impossible to store things, keep track of history
// etc.Also, different variables can have or hold the same value (point to the
// same value) We can also declare multiple variables on one line separating the 
// names by commas and ending the statement with a semicolon.  */
let car1 = 'BMW', 
car2 = 'mercedes', 
car3 = 'toyota';
console.log(car1, car2, car3);


// The const keyword was introduced in the ES6(ES2015) version to create 
// constants. Once a constant is initialized, we cannot change its value. 
// Also, you cannot declare a constant without initializing it.
 const car5 = 'nissan';
 
// DECLARATION (with let, or with const) and initialization (with = sign or 
// assignment operator) we can declare a variable in a single statement on one
// line or multiple lines

// If you use a variable without initializing it, it will have an undefined value.
let day;
console.log(day);
console.log(typeof day);
 
// Variable name is usualy camelCase and must start with either a letter,
// an underscore _, or the dollar sign $.
// Variable name cannot begin with a number or keywords. 
// It can begin with capital letter if it is a const.
const _car = 'audichevy';
console.log(_car);

// JavaScript 'console.log()'
// All modern browsers have a web console for debugging. 
// The console.log() method is used to write messages to these consoles.
 
// example: print a sentence
 console.log("some string");
// Print Values Stored in Variables greet and name
// storing values
const greet = "Hello";
const name1 = "Jack";
const ageJ = 23;
console.log(greet + ' ' + name1 + ' ' + ageJ);
console.log(`${greet} ${name1} ${ageJ}`);

 
/* Difference between let and var:
One of the most important things in programming is to clearly express your intent.
Simply speaking 'let' allows you to define the identifier which value can be 
changed in the future, and const defines the one that is unchangeable.
Also, 'let' is a block scoped version of var. That means that it’s visibility 
will be limited to block, statement or expression where it was defined and all
the inner blocks.
*/

let x = 10; // this is a statement
if (x == 10) {
   let x = 20;
   console.log(x + ' inside block'); // 20
   
} else {
   
}
console.log(x + ' outside block') // 10

// with 'var'

var xx = 10;
if (xx == 10) {
   var xx = 20;
   console.log(xx + ' inside block'); // 20
   
} else {
   
}
console.log(xx + ' outside block'); // 20

 
/* When the JavaScript engine completes executing the 'if block', 
the x variable inside the 'if block' is out of scope. Therefore,
the value of the x variable that following the if block is 10.
 
So, var declares new variable and have 2 scopes: global and function scope
Because the let keyword declares a block-scoped variable, the
xx variable inside the if block is a new variable and it shadows 
the xx variable declared at the top of the script. 
Therefore, the value of xx in the console is 20.
 
In JavaScript, blocks are denoted by curly braces {}, for example, the

Variables ASSIGNMENT:
1. Declare variables called 'country', 'continent' and 'population' and
    assign their values according to your own country (population in millions)
    Log their values to the console.
2. Declare 2 variables without initialization and log values in console.
3. Declare let variable and reassign a value to it.
4. Declare and initialize const variable and then reassign its value - verify error in console.
5. Declare multiple variables on one line and then initialize them, check console for result
6. Declare variable with JS keywords, check console errors. https://www.w3schools.com/js/js_reserved.asp
7. Print values to the console "My name is whatever and I am 23 years old”. Here, declare name and age
    in a variable and use concatenation to print to console
*/