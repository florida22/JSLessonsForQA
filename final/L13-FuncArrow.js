/*
Arrow Function
There are different ways how we can declare a function,one of them was to use the function keyword,
and the second one is to use the arrow operator ‘=>’. 
This is the ES6 feature and means a shorthand syntax for function declaration. 
Using an arrow function comes with advantages and some disadvantages as well. 
The arrow function expression is an alternative to the traditional function expression.
Here is an example that will help you understand more about arrow functions:*/
// Traditional Function 
// function addFun (a){ 
//     return a + 100; 
//    } 
//    // Arrow Function 
//    let addFun = a => a + 100; 
   

/*The arrow functions are much cleaner and shorter, but let us go through its syntax. We provide 
the parameter variables on the left side of the arrow operator, and on the right side of the 
operator, we return the function value. If there is a single parameter ‘a’ like we have in the
 example above, we do not need to enclose that parameter in parentheses as we did in the 
 traditional function declaration ‘(a)’. We know that a traditional function can be without 
 parameter/parameters right, and we can do the same thing with the arrow function, but we need 
 to use the empty set of parentheses like in this example:*/
//arrow function with no parameters 
let noParams= () => 'No Parameter function'; 
// How can we invoke the arrow functions then? Well, we can simply use the name of that function.

// Let first invoke the addFun:
let addFun = a => a + 100; 
//call the arrow function 
let result = addFun(10); 
console.log(result); // 110

///We stored the return of the function into a variable called ‘result’, and we console log the 
//output.

// The no parameter’s function invocation is like this:
let storeResult = noParams(); 
console.log(storeResult) // No Parameter function


/*Let me explain that when we have a single line of code in the function body, we do not specify 
the return keyword. Check out the example without return keyword:
a + 100;
In this case, we do not need to write return keyword. But the same function will be a valid arrow
function even if we include the return keyword like this:*/

let addFun1 = a => { 
 return a + 100; 
}; 

/*If the body requires multiple lines of code, then we need to use the curly brackets plus the 
return statement because the arrow function does not know what or when we want the function to 
return. Check out the following example:*/
// Traditional Function 
function additionFn (x, y){ 
 let result = x + y; 
 return 'This is the result :'+ result; 
 } 
let store1 = additionFn(3, 4); 
console.log(store1); 

// Arrow Function 
let additionFn1 = (x, y) => { 
 let result = x + y; 
 return 'This is the result :'+ result; 
} 

let store2 = additionFn1(3,4); 
console.log(store2); 
//The output of both functions will be the same, and that is 7.
//One important thing here is that we need to use the ‘=>’ operator in the same line as the 
//parameters. Otherwise, it will throw you an error:
//This is OK 
let multiFn = (x, y) => { 
 let result = x * y; 
 return 'This is the result:'+ result; 
} 
//This will give you an error 
// let multiFn2 = (x, y) 
// => { 
//  let result = x * y; 
//  return 'This is the result:'+ result; 
// } 

//------------------------------------------------
// function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

// Arrow Function, no need {} and return happens explicitly, value is returned automatically
birthYear => 2037 - birthYear;

// to use it we store it in variable
const calcAge3 = birthYear => 2037 - birthYear;

// to use this func
const age3 = calcAge3(1991);
console.log(age3);

/*
Syntax
#
x => y // Implicit return

x => { return y } // Explicit return

(x, y, z) => { ... } // Multiple arguments

async () => { ... } // Async arrow functions

(() => { ... })() // Immediately-invoked function expression

const myFunc = x

=> x*2 // A line break before the arrow will throw a 'Unexpected token' error

const myFunc = x =>

x*2 // A line break after the arrow is a valid syntax
*/