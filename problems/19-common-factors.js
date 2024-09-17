/*
Write a function commonFactors that accepts two numbers as arguments. The
function should return an array containing positive numbers that are able to
divide both arguments.
*/

// Your code here 

function commonFactors(num1, num2) {
// find smaller of the 2 nums
    let min = Math.min(num1, num2);

//initialize empty array to store results
    let results = [];

// loop thru all numbers from 1 to min
    for (let i = 1; i <= min; i++)  {
//check if i is a factor of both a and b
    if (num1 % i === 0 && num2 % i === 0) {
        results.push(i);
        }        
    }    
    return results;    
}











// console.log(commonFactors(4, 8));              // [1, 2, 4]
// console.log(commonFactors(12, 24));            // [1, 2, 3, 4, 6, 12]
// console.log(commonFactors(22, 44));            // [1, 2, 11, 22]
// console.log(commonFactors(7, 9));              // [1]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = commonFactors;