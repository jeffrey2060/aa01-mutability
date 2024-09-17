/*
Write a function factorsOf(num) that takes in a number as an arg. The method
should return an array containing all positive numbers that are able to divide
into num with no remainder.
*/

// Your code here 

function factorsOf(num) {
// initialize empty array to store results
    let factors = [];
    
// loop from 1 to num
    for (let i = 1; i <= num; i++)  {
// check if 1 is a factor of num
    if (num % i === 0) {
        factors.push(i);
        }        
    }   
    return factors; 
}








// console.log(factorsOf(9)); // [ 1, 3, 9 ]
// console.log(factorsOf(10)); // [ 1, 2, 5, 10 ]
// console.log(factorsOf(24)); // [ 1, 2, 3, 4, 6, 8, 12, 24 ]
// console.log(factorsOf(2017)); // [ 1, 2017 ]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = factorsOf;