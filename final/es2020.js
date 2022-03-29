 /* S2020 introduced the nullish coalescing operator denoted by 
 the double question marks (??). The nullish coalescing operator is a logical operator that accepts two values:
value1 ?? value2
The nullish coalescing operator returns the second value (value2) 
if the first value (value2) is null or undefined. Technically,
 the bullish coalescing operator is equivalent to the following 
 block */
 
 let value1;
 let value2 = 'sea';
value1 ?? value2  
console.log(value2);

// above is same as this:
let result = value1;
if(result === null || result === undefined) {
   result = value2;
   console.log(value2);
}
console.log(value2);

// n this example, the operator ?? does not evaluate the expression 
// 1/0 because the first value is 1, which is not null and undefined.

// here it does, 1st value is undefined


// combine && and || (|| is key above Enter)
const result5 = (null || undefined) ?? 'OK'; 
console.log(result5); 