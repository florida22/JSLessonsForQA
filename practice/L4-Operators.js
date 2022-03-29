/*
An operator performs some operation on single or multiple operands (data value) 
and produces a result. For example, in 1 + 2, the + sign is an operator 
and 1 is left side operand and 2 is right side operand. 
The + operator performs the addition of two numeric values and returns a result.
*** Arithmetic Operators (+, -, *, /, %(Returns remainder of two operands),
    ++(increment), -- (decrements)).
*** Comparison Operators (true, false).
*** Logical Operators ( &&, ||, !).
*** Assignment Operators (+=, -=, /=, *=, %=).
*** Conditional Operators (Ternary Operator (<condition> ? <value1> : <value2>;)).
-----Operator precedance - check MSDN website-----/* 
Operator precedence determines how operators are parsed concerning each other. 
Operators with higher precedence become the operands of operators with
lower precedence.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

<Left operand> operator <right operand>
*/
////////// Arithmetic Operators/////////
// let x = 5, y = 10;
// let z = x % 2;
// console.log(z);

/*If either value is a string, the addition operator uses the following rules:
If both values are strings, it concatenates the second string to the first one.
If one value is a string, it implicitly converts the numeric value into a 
string and concatenate two strings.
For example, the following uses the addition operator to add concatenate 
two strings.
*/

// let x = 10,
//     y = '20'
// let result = x * y;
// console.log(result);

/* Subtraction operator!!! (-)
If a value is a string, a boolean, null, or undefined, the JavaScript engine will:
First, convert it into a number using the Number() function.
Second, perform the subtraction.
*/


//If either value is not a number, the JavaScript engine implicitly converts 
// it into a number using the Number() function and performs the multiplication. 
// For example:



/*
Divide operator (/)
Javascript uses the slash (/) character to represent the divide operator. 
The divide operator divides the first value by the second one. For example:
*/



// If either value is not a number, the JavaScript engine converts it into 
// a number for division. For example:



//////// Increment operator - Unary operator//////////
/* The increment operator (++) increments (adds one to) its operand and returns a value.
It can be used as a postfix or prefix operator. Postfix: meaning the operator comes after the operand (y++). 
This returns the value before incrementing. Prefix: the operator comes before the operand (++y).
Using it as a prefix returns the value after incrementing.

This numerical operation increases or decreases a variable by 1. It’s important to remember that
this can only be applied to variables, and applying this operation to numerical values will return an error.
*/
// let counter = 2;
// counter--; // 
// alert(counter); 

// let i = 0;
// i--;
// --i;
// alert(i)

//////////// String Concatenation////////////////////////////
// The + operator performs concatenation operation when one of 
// the operands is of string type.


///////////////// Comparison Operators///////////////////////////////
//  compare two operands and return a boolean value true or false
// let a = 5, b = 10, c = '5', x = a;
// a === c; // false
// console.log(a === c);
// a == x; 
// a != b;
// a > b;
// a >= b;
// a <= b;
// console.log((a == c), (a === c), (a == x), (a != b), (a > b), 
// (a < b), (a >= b), (a <= b));


//////////////// Logical Operators////////////////////////
/* are used to combine two or more conditions.

 "&&"" is known as AND operator. It checks whether two operands are non-zero or not
  (0, false, undefined, null or "" are considered as zero). It returns 1 if 
 they are non-zero; otherwise, returns 0.

 "||"" is known as OR operator. It checks whether any one of the two operands is non-zero
  or not (0, false, undefined, null or "" is considered as zero). 
 It returns 1 if any one of of them is non-zero; otherwise, returns 0.

 "!"" is known as NOT operator. It reverses the boolean result of the operand 
 (or condition). !false returns true, and !true returns false.
 */
// let a = 5, b = 10;

// (a != b) && (a < b);
// console.log((a != b) && (a < b));

// (a > b) || (a == b); // 
// console.log((a > b) || (a == b));

// !(a > b);
// console.log(!(a > b));



//////////////////// Assignment Operators/////////////////////////////
// assign values to variables with less key strokes.

// let x = 5, y = 10,  z = 15;
// x *= 5; // x = x * 5

//////////////////// Conditional Operators or Ternary Operator//////////////

/* is a short form of if-else condition. The conditional (ternary) operator is 
the only JavaScript operator that takes three operands: a condition followed by
a question mark (?), then an expression to execute if the condition is truthy
followed by a colon (:), and finally the expression to execute if the condition
is falsy. 
This operator is frequently used as an alternative to an if...else statement.
<condition> ? <value1> : <value2>;
condition ? expressionIfTrue : expressionIfFalse
*/
const age = 25;
age >= 18 ? console.log("If block, I drive a car") : 
console.log("Else block. I drive bike");

age >= 18 ? 'car' : 'bike';

const age1 = 11;
const drink = age1 >= 18 ? 'votka' : 'lemonade';
console.log(drink)


let drink2;
let age2 = 21;
if (age2 >= 18) {
    drink2 = 'vodka';    
} else {
    drink2 = 'lemonade'   
}
console.log(drink);

console.log(`I like ${age >= 18 ? 'car' : 'bike'}`);
console.log(`I do not like ${drink}`);



// operator always produces a value, operator is an expression. If we have a value
// we can assign that value to a variable, so we can use ternery operator to conditionaly
// declare variables



// Homework
/*
1. Jane has 3 apples, 2 pears, and 4 plums. She does not have a kiwi.
Create variables for each fruit and assign a value.
Display in console all fruits she has and a fruit she does not have.
2. if jane gives you 1 pear and 2 plums for lunch, how many fruits she has left
   Display division result in the console.
3. Jonny won $20 on lottery scratch ticket and then he saw he earned a bonus 10X the value
   Console log result of multiplication. Then he was happy so he returned $100 to Alex, 
   and spend 5.67 cents on a coffee drink. Then he split the rest with his girlfriend.
   How much she got?
4. If elephant is bigger than a dog and if cat is bigger than a mouse - write expression and log it
on a console

6. Rewrite this code by using ternary operator

const hour = 28;
let greeting = "Good";
if (hour > 18) {
    greeting += " evening.";
} else {
    greeting += " day.";
}
console.log(greeting);

*/

