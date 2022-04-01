/* JS Template Literals
Synonyms: Template Literals, Template Strings, String Templates, Back-ticks String.
Template = format for a document
Literal = original, precise, exact, in JS it is a notation for representing a fixed value
in our code. What does that mean?
Also, literal as opposed to non-literal?

Well, in programming in general a literal is a fixed value.
Like saying: */ 
let five = 5; // and using "five" in some math, just use the number 5 literally.

// So in an OOP language an object literal would be something like:

let new_dog = {
    name: "doggy",
    good_dog: false
};
/*The entire thing is my object. Things between my {} are my literals. 
My notation is a pattern "name:value".
The string interpolation in JavaScript is performed by template literals 
(strings wrapped in backticks ``) and ${expression} as a placeholder.
Template Literals use back-ticks (``) rather than the quotes ("") to define a string:
*/

let day = `Morning.`;

// Quotes Inside Strings - With template literals, you can use both single and double
// quotes inside a string or we can use multiple string:

let night = `We can see "Orion Belt"`;
console.log(day, night);

// String Interpolation (insert something of a different nature into something else)😹 .
// easy way to interpolate variables and expressions into strings.
// replacement of variables with real values The syntax is: ${...}
let something = "water";
let somethingElse = "bucket";
let syntax = "syntax ${...}";
let backTicks = "``"

let say = `We use backticks (${backTicks}) to insert ${something} into ${somethingElse}
 with this ${syntax}!.`

console.log(say);

let price = 10;
let tax = 0.25;

let total = `Total: ${(price * (1 + tax)).toFixed(2)}`;
console.log(total)

// HTML Templates
//Template literals provide an easy way to interpolate variables and 
//expressions into strings.The method is called string interpolation.


/*{ <h2>JavaScript Template Literals</h2>

<p>Template literals allows variables in strings:</p>

<p id="demo"></p>

<p>Template literals are not supported in Internet Explorer.</p>

<script>
let header = "Templates Literals";
let tags = ["template literals", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;

for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;
document.getElementById("demo").innerHTML = html;
</script> } */

let p = {
  name: 'Jackson',
  nn: 'Jack',
};
// STRING CONCATENATION
console.log('Hi, I\'m ' + p.name + '! Call me "' + p.nn + '".');
// TEMPLATE LITERALS
console.log(`Hi, I'm ${p.name}! Call me "${p.nn}".`);
// "Hi, I'm Jackson! Call me 'Jack'."


// STRING CONCATENATION
console.log('Three plus six is ' + (3 + 6) + '.');
// TEMPLATE LITERALS
console.log(`Three plus six is ${3 + 6}.`);
// "Three plus six is 9."


/* Homework: practice in few examples












/*
Homework:
1. Create variables for 3 types of animals with their age for each animal
2. Log in console string saying : "Dog Alfie is 3 year old and he loves 3 year old cat Mimi
and 4 year old mouse Barney! Wow!", the old way with concatenation.
3. Rewrite same string in a new way with template literals by using backticks and ${} expressions.
*/

