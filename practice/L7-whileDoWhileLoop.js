/*
Suppose you want to type a ‘Hello’ message 100 times in your webpage. 
Of course, you will have to copy and paste the same line 100 times. 
Instead, if you use loops, you can complete this task in just 3 or 4 lines.

The JavaScript "while statement" creates a loop that executes a block as long as a 
condition evaluates to true.
The "while statement" evaluates the expression before each iteration of the loop.

If the expression evaluates to true, the "while statement" executes the statement.
 Otherwise,the "while loop" exits.

Because the "while loop" evaluates the expression before each iteration, it is known as a 
pretest loop. There is another "For loop" which is posttest loop.

If the expression evaluates to false before the loop enters, the "while loop will never" execute.
And "while" and "do...while loops" are usually used when the number of iterations are unknown.
"For loop" is used when number of iteration is known. 

How the script works in "while statement"?
*/
/*
let count = 1;             // declare and initialize the count variable to 1
while (count < 10) {
    console.log(count);    // In each iteration, ouput the count to the console and increase the count by 2.
    count +=2;
}                        // after 5 iterations, the count is 11. Therefore, the condition count < 10 is false, the loop exits.
*/

/* Let's find the sum of negative numbers, but if the user enters a positive numbers, the loop ends.
   (the positive number entered is not added to sum)
*/
/*
let sum = 0;

// take input from the user
let number = parseInt(prompt('Enter a number: '));

while(number < 0) {

    // add all negative numbers
    sum += number;

    // take input again if the number is negative
    number = parseInt(prompt('Enter a number: '));
}

// display the sum
console.log(`The sum is ${sum}.`);
*/
/*Here, parseInt() is used because prompt() takes input from the user as a string.
 And when numeric strings are added, it behaves as a string. For example,
 '2' + '3' = '23'. So parseInt() converts a numeric string to number and result is 5. 
 console.log(parseInt('2FE')) // 2
 console.log(parseInt('31xyz'))  // 31
 */

// Here, we have a break to terminate loop earlier
// let score = 0;
// while (score < 6) {
//     if (score === 3) {
//       break;
//     }
//     score = score + 1;
//   }
  
//   console.log(score);
  // expected output: 3

/*




/* 😢 Homework:

 1. Write a program to find the sum of positive numbers, if the user enters a negative numbers, 
    the loop ends.
 
 2. Display numbers from 1 to 9 using while...do loop.

 3. Display numbers from 1 to 9 using while...do loop and then terminate a loop when number reaches 5.


 */