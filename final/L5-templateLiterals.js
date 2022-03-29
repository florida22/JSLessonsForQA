
const firstname = 'Sam';
const job = 'QA';
const birthYear = 1991;
const year = 2022;
const sam = "I'm " + firstname + ', a ' + (year - birthYear) + ' years old ' + job + ' !';

console.log(sam);  // very painfull

// solution starting with ES6, we use backtics

const samNew = `I'm ${firstname}, a ${year - birthYear} years old ${job}!`;
console.log(samNew);

// regular string with backtics
console.log(`Just a regular string without expressions and $ signs, yeee!`);

// new line, old way
console.log(`String with \n\ multiple \n\ lines.`)

// new lines with template literals, no /n/
console.log(`String
with
multiple
lines.`)

/*
Homework:
1. Create variables for 3 types of animals with their age for each animal
2. Log in console string saying : "Dog Alfie is 3 year old and he loves 3 year old cat Mimi
and 4 year old mouse Barney! Wow!", the old way with concatenation.
3. Rewrite same string in a new way with template literals by using backticks and ${} expressions.
*/

