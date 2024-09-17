/*
Write a function additionMutator that accepts an array and a number as
arguments. The function should mutate the input array such that every element
has the given number added to it.
*/

// Your code here 

function additionMutator(array, num)  {
// initialize a counter variable
    let i = 0;
    while (i < array.length)  {
// add given num to current element
        array[i] = array[i] + num;
// increment counter
    i++;        
    }        
}

let arr = [1, 2, 3, 4];
additionMutator(arr, 5);
console.log(arr);







// let nums1 = [3, 7, 1, 2];
// let nums2 = additionMutator(nums1, 4);
// console.log(nums1);     // [ 7, 11, 5, 6 ]
// console.log(nums1 === nums2) // true;

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = additionMutator;