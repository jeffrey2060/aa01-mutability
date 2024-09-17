/*
Write a function adjacentSum that takes in an array of numbers and returns a new
array containing the sums of adjacent numbers in the original array. See the
examples.
*/

// Your code here 

function adjacentSum(arr) {
// initialize empty array to store results
    let result = [];
    
// loop thru array up to the 2nd to last element
    for (let i = 0; i < arr.length - 1; i++) {

        // compute the sum of the current element and next element
    let sum = arr[i] + arr[i + 1];

    // add sum to result array
    result.push(sum);            
    }    
    return result;
}












// console.log(adjacentSum([3, 7, 2, 11])); // [10, 9, 13], because [ 3+7, 7+2, 2+11 ]
// console.log(adjacentSum([2, 5, 1, 9, 2, 4])); // [7, 6, 10, 11, 6], because [2+5, 5+1, 1+9, 9+2, 2+4]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = adjacentSum;