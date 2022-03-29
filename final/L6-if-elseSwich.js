/*
The “if” statement
The if(...) statement evaluates a condition in parentheses and,
if the result is true, executes a block of code.
}  
*/
/*
let year = prompt(`What year is today?`);

if (year == 2022) alert(`You are right!`);

// If more than one statement, we have to wrap our code  block inside curly braces:

if (year == 2022) {
  alert( "That's correct!" );
  alert( "You're so smart!" );
}
*/

/*
The if (…) statement evaluates the expression in its parentheses and converts 
the result to a boolean.
A number 0, an empty string "", null, undefined, and NaN all become false. 
Because of that they are called “falsy” values.
Other values become true, so they are called “truthy”.
So, the code under this condition would never execute:
*/

if (0) { 
  // 0 is falsy 
}
// …and inside this condition – it always will:

if (1) { 
  // 1 is truthy 
}

/* The “else” clause!!!
 The 'if statement' may contain an optional “else” block. It executes when the condition is falsy.
 Several conditions: “else if”
 Sometimes, we’d like to test several variants of a condition. 
 The else if clause lets us do that.*/

/* let accessAllowed;
 let age = prompt('How old are you?', '');

 if (age > 18) {
   accessAllowed = true;
 } else {
   accessAllowed = false;
 }

alert(accessAllowed);
*/

/* The so-called “conditional” or “question mark” operator lets us do that in a shorter and simpler way.
 The operator is represented by a question mark ?. Sometimes it’s called “ternary”, 
 because the operator has three operands. It is actually the one and only operator in JavaScript
  which has that many.
 let result = condition ? value1 : value2;
 The condition is evaluated: if it’s truthy then value1 is returned, otherwise – value2.
 For example:
 */

let agePerson = prompt('How old are you?', '');
// let accessAllowed = (age > 18) ? true : false; // we can omitt parentheses
// the same and ? because the comparison itself returns true/false:
let accessAllowed = agePerson > 18;
alert(accessAllowed);

// A sequence of question mark operators ? can return a value that depends on more than one condition.
let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );

// Here’s how this looks using if..else:

if (age < 3) {
  message = 'Hi, baby!';
} else if (age < 18) {
  message = 'Hello!';
} else if (age < 100) {
  message = 'Greetings!';
} else {
  message = 'What an unusual age!';
}

// Homework:

//1.  Use ternary operators to rewrite this code:

let corpTaxMessage;

if (login == 'Employee') {
  corpTaxMessage = 'Hello';
} else if (login == 'Director') {
  corpTaxMessage = 'Greetings';
} else if (login == '') {
  corpTaxMessage = 'No login';
} else {
  corpTaxMessage = '';
}

// 2.Will alert be shown?

if ("0") {
  alert( 'Hello' );
} 

/* 3.Using if..else, write the code which gets a number via prompt and then shows in alert:

1, if the value is greater than zero,
-1, if less than zero,
0, if equals zero.
In this task we assume that the input is always a number.
*/

// 4. Rewrite this if using the conditional operator '?':
let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}
