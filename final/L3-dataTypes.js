/*
JavaScript Data Types
There are different types of data that we can use in a JavaScript program.
There are eight basic data types in JavaScript. They are:
Primitive types: String, Number, BigInt, Boolen, undefined, null, Symol 
and Object which is not primitive type
Here, all data types except Object are primitive data types, 
whereas Object is non-primitive.
*/
// STRING - is used to store text. In JavaScript, strings are surrounded by quotes
let greeting = "Hello";
    greeting = 'Good Morning';
    greeting = `Good Night. I am going to sleep. Tomorrow I will continue learning JS`

    console.log(greeting);
// Backticks are generally used when you need to include variables or expressions 
// into a string. This is done by wrapping variables or expressions with
// ${variable or expression} 
const name = 'Sam';
const name1 = "Hari";
const result = `The names are ${name} and ${name1}`;

// NUMBER
// represents integer and floating numbers (decimals and exponentials). 
// A number type can also be +Infinity, -Infinity, and NaN (not a number). 
const number1 = 3;
const number2 = 3.433;
const number3 = 3e5 // 3 * 10^5

const number4 = 3/0;
console.log(number1); // Infinity

const number5 = -3/0;
console.log(number2); // -Infinity

// strings can't be divided by numbers
const number6 = "abc"/3; 
console.log(number3);  // NaN


// BigIn
// n JavaScript, Number type can only represent numbers less than (253 - 1) and 
// more than -(253 - 1). However, if you need to use a larger number than that, 
// you can use the BigInt data type.
// A BigInt number is created by appending n to the end of an integer. 
// BigInt value
console.log(9007199254740995n);    // → 9007199254740995n
console.log(9007199254740995);     // → 9007199254740996

// Keep in mind that you can’t use the strict equality operator to compare a BigInt
//  to a regular number because they are not of the same type:

// BOOLEAN
// his data type represents logical entities. Boolean represents one of two 
// values: true or false. It is easier to think of it as a yes/no switch.
// everything with a value is true, otherwise false
const dataChecked = true;
const valueCounted = false;
console.log(typeof dataChecked, typeof valueCounted);// typeof is operator
console.log(typeof 23);
console.log(typeof "something");

// The new Boolean() in upper case, will return a Boolean object, whereas it returns a boolean
// without the 'new' keyword. The boolean (lower case) is the primitive type, 
//whereas Boolean (upper case) is an object in JavaScript. Use the typeof operator
// to check the types
const b1 = new Boolean(true);
const b2 = true;

console.log(typeof b1, typeof b2);



// UNDEFINED
// The undefined data type represents value that is not assigned. 
// If a variable is declared but the value is not assigned, 
// then the value of that variable will be undefined.
// Undefined is both: the value and the data type.
let year;
console.log(year, typeof year);

// NULL
// In JavaScript, null is a special value that represents empty or unknown value
// type of null is an Object in JS, does not make sense and is a BUG in JS
// but for legacy reason is not corrected
// null is not an object, it should return null, just as undefined returns undefined
console.log(typeof null); // object, bith the value and type of the value are null

// Symbol
// A value having the data type Symbol can be referred to as a symbol value.
// Symbol is a built-in object whose constructor returns a symbol primitive — 
// also called a Symbol value or just a Symbol — that's guaranteed to be unique.
const teamA = Symbol('hello');
const teamB = Symbol('hello');
console.log(teamA, teamB); // Symbol(hello) Symbol(hello)

let team = Symbol('hello') == Symbol('hello');
console.log(team); // false

// Though teamA and teamB both contain 'hello', 
// they are different as they are of the Symbol type

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
let declaredVariable; // variable declaration is a statement
let otherVariable = 0; // even with assignment
function functionCall() { // function declaration is a statement
}
if(true){} // if is statement
2+2; // even this is statement
2; // even this small expression can be statement on their on.

// Even though it consists from only one expression
// As you can see statements just do things. They are kind of language phrases. 
// They can contain smaller parts, for example expressions.

// Simply speaking an EXPRESSSION returns a value:
2+2 // note: statement ends with semi :, here no ; :-), so its a value
true
true && false
functionCall() // whatever the function returns
declaredVariable // whatever the variable value was
declaredVariable = 'new value' // assignment is an expression
/*
Javascript program consists of statements. They are executed one by one, 
in the same order as they are written. Statements can contain other constructions
like expressions, keywords, operators and other stuff.
Expressions are parts of statements that return values. So expressions can be used
whenever value is expected.
*/

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

console.log(person['firstname'], person[lastname]);


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