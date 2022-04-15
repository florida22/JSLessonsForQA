/*
Functions
Another fundamentally important feature in JavaScript is functions. In this section, 
you will master functions, and I will help you learn how to write functions, call and 
execute them. 
Functions are subprograms that are written once, and they may be invoked or executed many times.
Here is one function that I want you to test out in your browser console:
document.write(‘Welcome’);
This is a function which purpose is to simply generate output. Most of the functions provide
and return a value.
Did you see that the text "Welcome" is written on your browser? The document.write() 
method will write a string of text to the current document. This is just an example 
of a very simple function, but we will go deeper than this.
Another function that I want you to test out is this one in your console:
let getNum = prompt ("Enter a number");
*/
let getNum = prompt ("Enter a number");
/*
This function will prompt the user to input text. Even if you type 5 and hit enter/return, 
the prompt will close, but the value will be stored in the variable getNum and will be 
stored as a string, not as a number. Therefore the value of getNum will string ‘5’.
These functions are just to warm you up before we start writing our own functions. Let 
us practice how we can write functions in the next section.
*/

/*
Declaring Functions
In JavaScript, there are different ways to declare a function, and we will go through them. 
The most common way to declare the function is by using the function keyword followed by 
parentheses, where we write the names of the parameters. Finally, the function body is
where we can have single or multiple statements. The body of the function is between the curly
 brackets, but if we have a single line of code, as you already know, we can omit them.
Function syntax:
function name (parameter1,…parameter2) {
//function body
}
Simple example:
*/
//function total (x, y) {
//return (x + y);
//}
/*Let me go over the syntax one more time. We start with the keyword function then we provide a 
name to that function. The name is known as function identifier. Inside the brackets, we 
provide parameters. In our case, we have two, but it can be many as long as they are separated
 by a comma. The types of the parameters are not important as well. Finally, in the body, 
 we are returning their sum using the return statement. The statements inside are the body 
 of the function, and they are executed only when the function is called or invoked.
The return statement in the function body yields the value that the function will return, and,
 in our case, it will be the sum of the values of the two x and y parameters.
We can also have the function without a parameter list, but we still need to provide the 
parenthesis. The number of parameters, as you can see, is not important to declare a function.
*/
//function without a parameter list 
function simpleFn(){ 
 return 'No Parameters'; 
} 

/*
Invoke Functions, run function or call function - all is the same terminology
Now you know how to declare functions, but it is time to call these functions.
To call a function, you need to pass the arguments and store the value inside the variable.*/
//call the total function 
let storeResult = total(4,9); 
console.log(storeResult); 
/*Let me explain this: a function provides a list of arguments. Each of the arguments we pass 
to the function is matched to a parameter we specified in the function declaration or 
function definition. Therefore, the x will be matched with the number 4, and y will have 
number 9. Remember the parameters in the function do not have a data type. Still, 
the arguments we are passing during the function invocation/call must be from the correct type.
For example, we need to do a simple mathematical calculation. We need to pass numbers, 
not strings. But what will happen if we pass strings? Will we get an error? Let’s find out:*/
//lets pass two string arguments instead of numbers 
let storeResult1 = total('4','9'); 
console.log(storeResult1); 
/*The output will be the string ‘49’ because the return statement in the function body thinks
we are trying to concatenate two strings, ‘4’ and ‘9’.

Let us discuss the return statement and what this statement does in our function. The return 
statement returns immediately, and it will terminate the function. The return statement will
return the value to the caller. Imagine if we have more statements below the return statement. 
As soon as the function returns, the function is terminated, so the remainder of the code below 
the return keyword will never be evaluated.
Let us consider this scenario: We can have a function without a parameter list and no return
 statement:*/
//function without return 
function noReturnValue(){ 
 console.log('No return statement'); 
} 
let storage = noReturnValue(); 
console.log(storage); // undefined

/*In this case, if we print the storage variable, we will have undefined value. You need to 
understand that when we declare a function name, that name becomes a variable in which we 
store whatever the function returns.

You need to 
understand that when we declare a function name, that name becomes a variable in which we 
store whatever the function returns.

You need to 
understand that when we declare a function name, that name becomes a variable in which we 
store whatever the function returns.
*/
// declare func
function total(x, y) {
    return(x * y);
}
//call the 'total' function 
let storeResult2 = total('4', '9'); 
console.log(storeResult); 

//function without return 
function noReturnValue1(){ 
 console.log('No return statement'); 
} 
let storage1 = noReturnValue1(); 
console.log(storage); // undefined

/*
Function Expression
In JavaScript, there is another syntax for creating a function, and this is called function
expression. Syntax for function expression (anonymous):
let variableName = function (x, y) { statements... return (x+y) };
Here is an example:*/

let greeting1 = function(firstName, lastName){ 
 return `Nice to see you again ${firstName} ${lastName}`; 
} 

// String Interpolation (insert something of a different nature into something else)😹 .
// easy way to interpolate variables and expressions into strings.
// replacement of variables with real values The syntax is: ${...}

/*From the example and the syntax I provided, we can see that the function expression allows 
us to create an anonymous function that does not have function name. This is the main 
difference if we compare it to the first function declaration examples. The function expression
is stored in a variable and can be invoked/called using that variable name.
We call it anonymous function because there is no name, so the variable name can access this 
function. 
JavaScript also allows to use names for function expression. Check out the following
syntax: Syntax for function expression (named):
let variableName = function functionName(x, y)
{
statements... return (x+y);
};
*/
function sum(x,y) {
    return (x+y);
    
}
let functionSum = sum(3,4);
console.log(functionSum);

/*It is recommended that you use the const instead of let with function expression so you don’t
overwrite the function by accident because we cannot modify things that are declared as const.
Remember this? Another important rule about functions expressions is that we cannot use them
before they are created, meaning the function expression in JavaScript is not hoisted. What
is hoisting? Well, hoisting in JavaScript means that variables and function declarations 
are moved to the top of their scope before code execution. When using a normal function 
declaration, the function object is created even if the code that specifies its declaration
has not been processed or evaluated. That is why we can call these normal functions 
before the code where we write the definition statement is evaluated. 
The story with function expression is a little bit different, they do not exist, and we cannot 
call them before the expression that declares them is evaluated. The function expression is 
assigned to a variable, so we can refer to that function. In short, the function defined as the
expression cannot be called before it is defined, which is very logical.

Invoke Function Expression

The output of this function is: 'Nice to see you again Luke Perry! Now you know how simple it
is to call a function expression in JavaScript'.

*/
let greeting = function(name,lastName){ 
    return `Nice to see you again ${name} ${lastName}`; 
   } 
   //invoke function expression 
   let theMessage = greeting('Luke', "Perry"); 
   console.log(theMessage); 

   let theMessage1 = greeting('Sam', "Perry"); 
   console.log(theMessage1);
   let theMessage2 = greeting('Jo', "Perry"); 
   console.log(theMessage2);

/*
Passing Arguments to functions

So far, we have learned a lot about functions. We know how to define/declare a function with 
specific parameters and invoke the same function in our program. Now let us imagine we have a 
function that will take two numbers and compare which one of them is bigger, and return that one:
*/
let a = 5; 
let b = 7; 

function findMax(x,z){ 
 if(x > z){ 
 return x;  
 } else {
 return a;
 }
} 
let biggerNum = findMax(a,b); 
console.log(biggerNum); 
/*The output will be, of course, the 7. What do you think will happen if we don’t supply the two 
arguments to the function? Will this cause an error? In JavaScript, something strange will happen. 
Therefore we can add more arguments to the function and still have an output.
We can declare another variable called c with a value of 8.
*/
let biggerOne = findMax(a, b); 
 //let c = 8; 
 biggerOne = findMax(a,b,c); 
console.log(biggerOne); 
/*/*What do you think the output will be? I hope you guess it right; the result will be 7 because 
the last argument we supplied additionally to the function will be ignored.
Another scenario is when we supply fewer arguments into the function.
I will just edit the last line of the previous example:
*/
// let biggerOne = findMax(a);//only one argument and we need 2 
// console.log(biggerOne);//undefined 
// //What will be the output now, do you know? Well, the output will be undefined because this is 
// //equivalent to this:
// let biggerOne = findMax(a,undefined); 
// //Then in the function body, this comparison will happen:
// if(5 > undefined) 
/*This will give us a result that is not of any use, but we can fix this using default function 
arguments. Default function parameters
It is very simple to provide default arguments in the function declaration.
This is the syntax:
function fnName(param1 = defaultValue1, ..., paramN = defaultValueN) { ... }
Check out the following example:
*/
function multiplyFn(a, b = 1) { 
 return a * b; 
 } 
let result1 = multiplyFn(5,2); 
console.log(result1);// output: 10 

let result2 = multiplyFn(5); 
console.log(result2);// output: 5 
/*The default function parameters allow us to initialize the parameters with default values if no 
or undefined value is passed. Therefore, in the second function call (multiplyFn(5)), we pass only 
one argument only, and that is why the function will look like this:
function multiplyFn(5, b = 1)
This is how we provide the default function parameter, and please note we can also do this for 
the first parameter.
*/
