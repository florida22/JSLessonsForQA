// declare a f
function total(x, y) {
    return (x * y);   
}

function simpleFunc() {
    return 'No parameters';   
}

// invoke, run, call, you need to pass the arg and store the value
// inside a var
let storeResult = total(4, 9);
console.log(storeResult);

// undefined function call
let undefinedFunc = function(a, b) {
}

// func w/o return
function noReturnValue() {
    console.log('No return value');   
}
let storage = noReturnValue();
console.log(storage);

// declare a func
function total(x, y) {
    return (x * y);    
}
// call the func
let storeResult2 = total(4, 9);
console.log(storeResult2);

// func expression - func is just a value, it is not a type like a string or a number
// if it is a value we can store it into a variable


let greeting = function(name,lastName){ 
    return `Nice to see you again ${name} ${lastName}`; 
   } 
   //invoke function expression 
   let theMessage = greeting('Luke', "Perry"); 
   console.log(theMessage); 

   let theMessage1 = greeting('Sam', "Perry"); 
   console.log(theMessage1); 

   let theMessage2 = greeting('jane', "Perry"); 
   console.log(theMessage2); 


// the diff between func decl and func expression
const change = money(500);
function money(pockeChange) {
    return 1000 - pockeChange;  
}
//const change = money(500);
console.log(change);










