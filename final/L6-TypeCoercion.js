/*Type Conversion - is when we manually convert form one type to another

*/
const inputYear = '1991';
console.log(inputYear + 18); // 199118, it will concatonate

// so we use built-in Number() function to convert

const myBirthYear = "1988";
console.log(Number(myBirthYear) + 18);

console.log(Number('Jack')); // NaN actually it it invalid Number
console.log(typeof NaN); // number

console.log(String(2), 2);

// Type Coercion performed automatically or implicitly by the JavaScript engine
// whenever an operator is dealing with 2 values that have diff Type

console.log( 'I am ' + 23 + ' years old'); // produces a string, 23 is coerced to string
console.log( 'I am ' + '24' + ' years old');
console.log( `I am 23 years old`); // sam in template

// but subtraction does th eopposite converst string to number
console.log('23' - '10' - 3); // 10, same with 
console.log('23' * '10' - 3);