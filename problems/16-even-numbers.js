/*
Write a function evenNumbers(max) that takes in a number as an arg. The function
should return an array containing all positive, even numbers that are less than
max.
*/

// Your code here 

function evenNumbers(max)  {
// initialize empty array to store results
    let result = [];
    
// loop from 2 to max (exclusive) incrementing by 2
    for (let i = 2; i < max; i +=2)  {
        result.push(i);
    }    
    return result;
}











// console.log(evenNumbers(7));  // [ 2, 4, 6 ]
// console.log(evenNumbers(12)); // [ 2, 4, 6, 8, 10 ]
// console.log(evenNumbers(15)); // [ 2, 4, 6, 8, 10, 12, 14 ]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = evenNumbers;