// Type Conversion - is when we manually explicitly convert form one type to another
// string to Number to String to Number
const inputYear = '1991';
console.log(Number (inputYear) + 18);
console.log(Number('Jack')); 
console.log(typeof NaN);

// Type Coercion performed automatically or implicitly by the JavaScript engine
// whenever an operator is dealing with 2 values that have diff Type

console.log( 'I am ' + 23 + ' years old');  //
console.log( 'I am ' + '24' + ' years old');
console.log(`I am 23 years old`);

console.log('23' * '10' -3);


/* The type conversion is only used in three data types which are String, number, and boolean.
— To String Conversion : numbers, literals or booleans is converted to a string with 
JS built-in methods or functions used in the Explicit conversion.
Syntax :
String(ValueToConvert)
*/

String(23); // '23'
String(true);
String(undefined); // 'undefined' 
// undefined is the variable in which it is not assigned any value during its creation phase.
String(NaN);   // 'NaN'-> invalid number
String(null); // 'null'
// null is the value in which it is empty or not initialized or not defined, or it has a zero value.
String(1+1); // '2'


/* number.toString()
First, we declare and assign the value to the variable then using the 
variable name we call the toString() method using the dot(.) operator.
If we try to pass null and undefined values, then the JavaScript engine
shows TypeError.*/

; // 325


// parseInt(value) -  is the function that parses numerical strings to integers.
let string = "321";
console.log(string)

let number6 = parseInt(string);
console.log(number6)


parseInt(5e-7);      // => 5
// same as
parseInt('5e-7');    // => 5
// same as 
parseInt(0.0000005);

/*parseInt('5e-7') takes into consideration the first digit '5', but skips 'e-7'.
Because parseInt() always converts its first argument to a string,
 the floats smaller than 10-6 are written in an exponential notation.
 Then parseInt() extracts the integer from the exponential notation of the float.*/

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

/*Here, parseInt() is used because prompt() takes input from the user as a string.
 And when numeric strings are added, it behaves as a string. For example,
 '2' + '3' = '23'. So parseInt() converts a numeric string to number. 
 console.log(parseInt('2FE')) // 2
 console.log(parseInt('31xyz'))  // 31
 */