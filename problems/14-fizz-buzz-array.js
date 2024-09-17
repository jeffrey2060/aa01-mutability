/*
Write a function fizzBuzz(max) that accepts a number as an arg. The function
should return an array containing all positive numbers less than max that are
divisible by either 3 or 5, but not both.
*/

// Your code here 

function fizzBuzz(max)  {
//  initialize empty array to store results
    let result = [];

// use for loop to iterate thru all parameters
    for (let num = 1; num < max; num++)  {

        // check if num is divisible by 3 or 5, but not both
    if ((num % 3 === 0 && num % 5 !== 0) || 
            (num % 5 === 0 && num % 3 !== 0))  {

        // add num to array if meets all conditions
    result.push(num);        
    
        }       
    }  
    return result;  
}











// console.log(fizzBuzz(12)); // [ 3, 5, 6, 9, 10 ]
// console.log(fizzBuzz(20)); // [ 3, 5, 6, 9, 10, 12, 18 ]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = fizzBuzz;