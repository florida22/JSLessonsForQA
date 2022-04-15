'use strict';


/*The statement “use strict”; instructs the browser to use the Strict mode, which is a reduced and 
safer feature set of JavaScript.

Benefits of using ‘use strict’: Strict mode makes several changes to normal JavaScript semantics. 
Strict mode eliminates some JavaScript silent errors by changing them to throw errors.
Strict mode fixes mistakes that make it difficult for JavaScript engines to perform optimizations: 
strict mode code can sometimes be made to run faster than identical code that’s not strict mode.
Strict mode prohibits some syntax likely to be defined in future versions of ECMAScript.
It prevents, or throws errors, when relatively “unsafe” actions are taken (such as gaining access 
to the global object).
It disables features that are confusing or poorly thought out.
Strict mode makes it easier to write “secure” JavaScri

How to use strict mode: Strict mode can be used in two ways, remember strict mode doesn’t work with
 block statements enclosed in {} braces. 

Used in global scope for the entire script.
It can be applied to individual functions.
Using Strict mode for the entire script: To invoke strict mode for an entire script,
 put the exact statement “use strict”; (or ‘use strict’;) before any other statements. 
*/

//Using a variable, without declaring it, is not allowed
// x = 3.14;  //  uncaught ReferenceError: x is not defined

// Objects are variables too.
// Using an object, without declaring it, is not allowed:
 
 // x = {p1:10, p2:20}; // Uncaught ReferenceError: x is not defined

// Deleting a variable (or object) and a function is not allowed. 
//function x(p1, p2) {}; // uncaught SyntaxError: Delete of an unqualified identifier in strict mode.
//delete x;

//Uncaught SyntaxError: Duplicate parameter name not allowed in this context
//function x(p1, p1) {}; 

//Octal literals are not allowed in strict mode.
// let x = 010;


// Escape characters are not allowed. 
// let x = \010;  // Uncaught SyntaxError: Invalid or unexpected token