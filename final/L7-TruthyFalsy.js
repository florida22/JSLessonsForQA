// falsy values are values that are not exactly false
// but will become false when we try to convert them into boolean
// in JS there are 5 falsy values: 0, null, "", NaN, undefined
// everything else are so called truthy values when we attempt 
// to convert them inot a boolean
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(" "));
console.log(Boolean("something"));
console.log(Boolean({})); // object

// in practice i dont use Boolean, we convert to boolean implicitly
// otherword it is always type Coercion where JS automatically converts
// When does JS does Coercion: 2 scenarios: when using Logical
// operators and second, when using logical context in the condition of and
//  if else statement

const money = 0;  // 0 is falsey value converted to false
if (money) {
    console.log("DOn't spend it all 😺 ");    
} else {
    console.log("Wou should get a job😠 ");    
}

// another use case to check if variable is defined or not

let height;
if (height) {
    console.log("Height is defined");  
} else {
    console.log("Heigh is undefined"); // undefined is falsey value    
}

// but if height = 0, we also get undefined, ) is perfectly vlaid
// 0 is also a falsey value, but it is a Bug because height is defined

/*
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and 
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement �


Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each 
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, so test for that 
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
team only wins if it has a higher score than the other team, and the same time a 
score of at least 100 points. Hint: Use a logical operator to test for minimum 
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
both teams have the same score and both have a score greater or equal 100 
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/
