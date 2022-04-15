// Type Conversion - is when we manually, explicitly convert form one type to another
// string to Number 
// Type Coercion performed automatically by JS or implicitely

// const inputYear = "1991";
// console.log(Number (inputYear) + 18);

// console.log(Number ("Jack"));

// // Coercion
// console.log("I am " + "23" + " years old");

// // Conversion
// String(23); "23"
// String(true); "true"

// // number.toString()
// let x = 195;
// let text = x.toString(8);
// console.log(text); // 1111

// // parseInt(value)
// let string = "321";
// console.log(string);

// let numX = parseInt(string);
// console.log(numX);

// while loop

let sum = 0;// 
// take input from user
let number = parseInt(prompt('Enter a number: '));
while(number > 0) {
    // add all negative numbers
    sum += number;

    // take input again if numbe ris negative
    number = parseInt(prompt("Enter an number: "))
}
// display the sum
console.log(`The sum is ${sum}.`);