/*
JavaScript Data Types
Primitive types: String, Number, BigInt, Boolen, undefined, null, Symol and Object 
which is not primitive type.
JS has dynamic typing: no need to define data type of the value stored in variable.
Value has a type, not variable, variable stores values that have a type.

*/
// STRING - is used to store text. In JavaScript, strings are surrounded by quotes
let greeting = "Hello";
    greeting = 'Morning';
    greeting = `evening`;
    // greeting = true / 5;
    

// Backticks are generally used when you need to include variables or expressions 
// into a string. This is done by wrapping variables or expressions with curly brackets
// and adding $ in front, like this: ${variable or expression} 
console.log(`${greeting}`);


// NUMBER
// represents integer and floating numbers (decimals and exponentials). 
// A number type can also be +Infinity, -Infinity, and NaN (not a number). 
const number1 = 3;
const number2 = 3.3444;
const number3 = true / 2; // 
const number4 = -3 / 0;

console.log(number1, number2, number3, number4);


// BOOLEAN
// this data type represents logical entities. Boolean represents one of two 
// values: true or false. It is easier to think of it as a yes/no switch.
// everything with a value is true, otherwise false

const b1 = new Boolean(true);
const b2 = true;

console.log(typeof b1, typeof b2);

// The new Boolean() in upper case, will return a Boolean object, whereas it returns a boolean
// without the 'new' keyword. The boolean (lower case) is the primitive type, 
//whereas Boolean (upper case) is an object in JavaScript. Use the typeof operator
// to check the types


// UNDEFINED
// The undefined data type represents value taken by a variable that is not yet defined (empty value) 
// If a variable is declared but the value is not assigned, then the value of that variable will
// be undefined. Undefined is both: the value and the data type.

let year;


// NULL
// In JavaScript, null is a special value that represents empty or unknown value
// type of null is an Object in JS, does not make sense and is a BUG in JS
// but for legacy reason is not corrected
// null is not an object, it should return null, just as undefined returns undefined

console.log(typeof null);

// Symbol
// A value having the data type Symbol can be referred to as a symbol value.
// Symbol is a built-in object whose constructor returns a symbol primitive — 
// also called a Symbol value or just a Symbol — that's guaranteed to be unique.
teamA = Symbol('Cats');
teamB = Symbol('Cats');

let team = Symbol('Cats') == Symbol('Cats');
console.log(team);


// Though teamA and teamB both contain 'hello', 
// they are different as they are of the Symbol type


// BigInt
// A BigInt number is created in ES6 by appending n to the end of an integer. 
// BigInt has values > than 2**53-1
console.log(9007199254740995n);    // → 9007199254740995n
console.log(9007199254740995);     // → 9007199254740996

// strict equality won’t work
console.log(10n === 10);    // → false
console.log(typeof 10n);    // → bigint
console.log(typeof 10);     // → number

// *******************************************************************88

/* Let’s talk about statements and expressions. 
 It’s very important to understand difference between them.
 An expression is always part of statement. Even if that statement only consists of
 that expression.
 When we write programs - we describe the sequences of actions that should be performed
 to get a desired result. In programming languages those actions are called statements.
 So every Javascript program basically consists of statements. In Javascript statements
 are separated by semicolons ( it is a good practice to separate it by semicolon).
*/
let declaredVariable; 
let otherVariable = 0;
function functionCall() {   

}

if (true) {
    name
}

2 + 2;

2;


// Even though it consists from only one expression
// As you can see statements just do things. They are kind of language phrases. 
// They can contain smaller parts, for example expressions.
2 + 2
true

true && false
functionCall()
declaredVariable
declaredVariable = 'new value'

// Simply speaking an EXPRESSSION returns a value:

/*
Javascript program consists of statements. They are executed one by one, 
in the same order as they are written. Statements can contain other constructions
like expressions, keywords, operators and other stuff.
Expressions are parts of statements that return values. So expressions can be used
whenever value is expected.
*/

// Object is not a primitive data type.
// Everything that is not a primitive type is an object.
let shoppingList = {};

let person = {
    firstname: 'John',
    lastname: 'Smith',
    ageJohn: 23,
    'loves pizza': true
}

console.log(person.firstname);
console.log(person.ageJohn, person.lastname, person['loves pizza']);

console.log(person['firstname']);


 /*
 Homework:
 1. Declare a variable called shoppingList and assign values: bread, milk, fruit to it.
    Log it in a console `I need to buy bread, milk and fruit` by wrapping variables 
    or expressions with ${variable or expression} .
 2. Create 6 statement using variables
 2. Create 6 expressions
 4. Create a variable and change it assigning it a new values with all primitive data types.
    Log it to console.
 
 */