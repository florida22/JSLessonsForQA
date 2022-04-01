/*
The “if” statement evaluates a condition in parentheses and,
if the result is true, executes a block of code.
}  
*/

// let year = prompt(`What year is today?`);

// if (year == 2022) alert(`You are right!`);

// // If more than one statement, we have to wrap our code  block inside curly braces:

// if (year == 2022) {
//   alert( "That's correct!" );
//   alert( "You're so smart!" );
// }


/*
The if (…) statement evaluates the expression in its parentheses and converts 
the result to a boolean.
A number 0, an empty string "", null, undefined, and NaN all become false. 
Because of that they are called “falsy” values.
Other values become true, so they are called “truthy”.
So, the code under this condition would never execute:
*/

// if ( 0) { 
//    // 0 is falsy 
// }
// // …and inside this condition – it always will:

// if (1) { 
//    // 1 is truthy 
// }

/* The “else” clause!!!
 The 'if statement' may contain an optional “else” block. It executes when the condition 
 is falsy.
 Several conditions: “else if”
 Sometimes, we’d like to test several variants of a condition. 
 The else if clause lets us do that.*/

//  let yourAge = prompt('How old are you?');

//  if ((yourAge > 70) && (yourAge <= 80)) {
//    console.log('In your 70s');
// //  } else if (yourAge > 60 && yourAge <= 70) {
// //    console.log('In your sixties');
// //  } else if (yourAge > 50 && yourAge <= 60) {
// //    console.log('In your 50s');
//   } else {
//    console.log("WOW! You rock!");
//  }

// However, if the first one is true, even if the later ones are also true, they 
// will never run

// if (10 > 2) {
//   console.log('Yep');
// } else if (11 > 10) {
//   console.log('YepYep');
// } else if (3 > 1) {
//   console.log('Yeeeeep');
// }


/* The so-called “conditional” or “question mark” operator lets us do that in a shorter and 
simpler way.The operator is represented by a question mark ?. Sometimes it’s called “ternary”, 
because the operator has three operands. It is actually the one and only operator in JavaScript
which has that many.
 let result = condition ? value1 : value2;
 The condition is evaluated: if it’s truthy then value1 is returned, otherwise – value2.
 For example:
 */

// let agePerson = prompt('How old are you?', '');
// // let accessAllowed = (age > 18) ? true : false; // we can omitt parentheses
// // the same and ? because the comparison itself returns true/false:
// let accessAllowed = agePerson > 18;
// alert(accessAllowed);

// // A sequence of question mark operators ? can return a value that depends on more than one condition.
// let age = prompt('age?', 18);

// let message = (age < 3) ? 'Hi, baby!' :
//   (age < 18) ? 'Hello!' :
//   (age < 100) ? 'Greetings!' :
//   'What an unusual age!';

// alert( message );

// // Here’s how this looks using if..else:

// if (age < 3) {
//   message = 'Hi, baby!';
// } else if (age < 18) {
//   message = 'Hello!';
// } else if (age < 100) {
//   message = 'Greetings!';
// } else {
//   message = 'What an unusual age!';
// }

/* SWITCH Statement - There are times in JavaScript where you might consider using a 
switch statement instead of an if else statement. Switch statements can have a cleaner 
syntax over complicated if else statements. 
n programming, a switch statement is a control-flow statement that tests the value of 
an expression against multiple cases.
The computer will go through  the switch statement and check for strict equality === between 
the case and expression.  
If one of the cases matches the expression, then the code inside that case clause will execute.
If none of the cases match the expression, then the default clause will be executed.
If multiples cases match the switch statement, then the first case that matches the expression
 will be used.
'break' statements will break out of the switch when the case is matched. If break statements 
are not present, then the computer will continue through the switch statement even if a match 
is found.

If return statements are present in the switch, then you don't need a break statement.
Instead of writing out the same console.log for each case, we can omit the break statements and
 place a singular operation after the group of cases.
*/

// const pet = "dog";

// if (pet === "lizard") {
//   console.log("I own a lizard");
// } else if (pet === "dog") {
//   console.log("I own a dog");
// } else if (pet === "cat") {
//   console.log("I own a cat");
// } else if (pet === "snake") {
//   console.log("I own a snake");
// } else if (pet === "parrot") {
//   console.log("I own a parrot");
// } else {
//   console.log("I don't own a pet");
// }

const pet = "dog";
const pet1 = 'parrot'
 
switch (pet) {
  case "lizard":
   console.log("I own a lizard");
   break;
  case "dog":
   console.log("I own a dog");
    break;
  case "cat":
    console.log("I own a cat");
    break;
  case "snake":
    console.log("I own a snake");
    break;
  case "parrot":
    console.log("I own a parrot");
    console.log(" you are animal lover")
    break;
  default:
    console.log("I don't own a pet");
    break;
}

// switch with return
function myFunction(opt) 
{
    switch (opt) 
    {
        case 1: return "One";
        case 2: return "Two";
        case 3: return "Three";
        default: return "";
    }    
}
console.log('Using a valid case:', ({
  1: 'One',
  2: 'Two',
  3: 'Three'
})[3] ?? 'Default')

/* in ES2020 we have ?? - The double question mark operator is called the nullish 
 coalescing operator, and it’s a new feature of JavaScript ES2020 that allows 
 you provide a default value to use when a variable expression evaluates to null or undefined.
 For example, the following code will assign the firstName variable value as the value of 
 username variable. When the firstName value is null, the username will be assigned as "Guest":
 */
 let firstName = null;
 let username = firstName ?? "Guest";
 console.log(username); // "Guest"

 // or u can write it
 let username1 = undefined ?? "Guest";
console.log(username); // "Guest"






/* Homework:

1. If your country's population is greater that 33 million, log a string like this to the 
console: 'Portugal's population is above average'. Otherwise, log a string like 
'Portugal's population is 22 million below average' (the 22 is the average of 33 
minus the country's population)
After checking the result, change the population temporarily to 13 and then to 
130. See the different results, and set the population back to origina

 2.Will alert be shown?

if ("0") {
  alert( 'Hello' );
} 

3. Rewrite 1. with switch statement.
4. https://tfs.corptax.com/tfs/corptaxcollection/Tbs.CorpTax/_git/corptax?path=%2Fsrc%2FUI%2FComponents%2Freact-components%2Fsrc%2Freducers%2FbreadcrumbsReducer.ts

*/