/*
Define a function lessThan5 that takes an array of numbers and returns a NEW
array containing all the numbers in the input array that are less than 5.
*/

// Your code here 

function lessThan5(arr)  {
// initialize new array to store #s
    let result = [];
// loop thru input array
    for (let i = 0; i < arr.length; i ++)  {
//check if # is less than 5
    if (arr[i] < 5)  {
// add # to results array
    result.push(arr[i]);        
    }        
    }     
    return result;   
}










// let nums1 = [1, -5, 10, 6, 2];
// let filteredNums1 = lessThan5(nums1);
// console.log(filteredNums1);           //=> [1, -5, 2]
// console.log(nums1 === filteredNums1); //=> false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = lessThan5;