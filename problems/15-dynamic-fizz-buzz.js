/*
Write a function dynamicFizzBuzz that accepts three arguments (max, num1, and
num2). The function should return an array containing positive numbers less than
max that are divisible by num1 or num2, but not both.
*/

// Your code here 


function dynamicFizzBuzz(max, num1, num2)   {
// initialize empty array to store results
    let result = [];   
    
// loop thru numbers from 1 to max - 1
    for (let number = 1; number < max; number++)  {
// check if number is divisible by num1 or num2 but not both
    if ((number % num1 === 0 || number % num2 === 0) && !(number % num1 === 0 && number % num2 === 0)) {
// if condition is met, add to results array
    result.push(number);        
         }        
    }   
    return result; 
}







// console.log(dynamicFizzBuzz(20, 3, 5)); // [ 3, 5, 6, 9, 10, 12, 18 ]
// console.log(dynamicFizzBuzz(24, 4, 6)); // [ 4, 6, 8, 16, 18, 20 ]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = dynamicFizzBuzz;
