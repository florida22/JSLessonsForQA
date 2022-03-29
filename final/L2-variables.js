/* Lesson 2 - Variables = named space in a memory = identifier = container that holds data
As of ES6, to declate a variable, We use: let(can be reassigned, is mutable) and const(cannot be reassigned)
 With the const keyword declaration and initialization always need to happen 
 together, because a const cannot be changed afterwards.
 Without variable it is almost impossible to store things, keep track of history etc.
 Also, different variables can have or hold the same value (point to the same value)
 We can also declare multiple variables on one line separating the names by commas and ending the 
 statement with a semicolon.  */

 let firstScore;
     firstScore = 2;; // changing the value stored in a variable
 // let firstScore;  // error, cannot re-declare variable

  // The const keyword was introduced in the ES6(ES2015) version to create constants.
  // Once a constant is initialized, we cannot change its value. 
  // Also, you cannot declare a constant without initializing it.
  const letter = "abc";
  //const x;
    
 // DECLARATION (with let, or with const) and initialization (with = sign or assignment operator)
 // we can declare a variable in a single statement on one line or multiple lines
 let thirdScore = 4444, fourthScore = 1666;
  
 // Multiple lines but still in one statement
 let fifthScore = 1111,
     sixthScore = 3333,
     lastScore = 7777;
 // console.log(fifthScore,sixthScore, lastScore);

 // If you use a variable without initializing it, it will have an undefined value.
 let cars;
 
 // Variable names must start with either a letter, an underscore _, or the dollar sign $.
 // Variable names cannot begin with a number or keywords. 
 // Can begin with capital letter if it is a const
 const $tree = 'pine';
 let _tree = 'pine';
 // let #tree = 'pine';
 // console.log(#tree);
 const PI = 3.14;

 // JavaScript 'console.log()'
 // All modern browsers have a web console for debugging. 
 //The console.log() method is used to write messages to these consoles.
 let sum = 44;
 console.log(sum);   // 44

 // example: print a sentence
   // passing string
   console.log("I love JS");

// Print Values Stored in Variables
// storing values
  const greet = 'Hello';
  const name = 'Jack';

  console.log(greet + ' ' + name); // Hello Jack


 /* Difference between let and var:
 One of the most important things in programming is to clearly express your intent.
 Simply speaking 'let' allows you to define the identifier which value can be changed
 in the future, and const defines the one that is unchangeable.
 Also, 'let' is a block scoped version of var. That means that it’s visibility will be
 limited to block, statement or expression where it was defined and all the inner blocks.

 So, var declares new variable and have 2 scopes: global and function scope

 Because the let keyword declares a block-scoped variable, the
 x variable inside the if block is a new variable and it shadows 
 the x variable declared at the top of the script. 
 Therefore, the value of x in the console is 20.
 
 When the JavaScript engine completes executing the 'if block', 
 the x variable inside the 'if block' is out of scope. Therefore,
  the value of the x variable that following the if block is 10.
 /*
 
 // In JavaScript, blocks are denoted by curly braces {}, for example, the 'if else' statement
 let x = 10;  // this is a statement
 if (x == 10) {
     let x = 20;
     console.log(x + " inside"); // 20:  reference x inside the block
 } else {
 
 }
 console.log(x + " outside"); // 10: reference at the begining of the script
 
 // with var
 
 var xx = 10;
 if (xx == 10) {
     var xx = 20;
     console.log(xx + " where?"); // 20  
 }
 console.log(xx + " where?"); // 20
 
 /*
Variables ASSIGNMENT:
 1. Declare variables called 'country', 'continent' and 'population' and
    assign their values according to your own country (population in millions)
    Log their values to the console.
 2. Declare 2 variables without initialization and log values in console.
 3. Declare let variable and reassign a value to it.
 4. Declare and initialize const variable and then reassign its value - verify error in console.
 5. Declare multiple variables on one line and then initialize them, check console for result
 6. Declare variable with JS keywords, check console errors. https://www.w3schools.com/js/js_reserved.asp
 7. Print values to the console "My name is whatever and I am 23 years old”. Here, declare name and age
    in a variable and use concatenation to print to console


 
 /////////////////////////////////////////////
 */