/*
Write a function popper(array, num) that takes in an array and a number as args.
The function should remove the last num elements from the array, mutating the
original array. The function should return a new array containing the elements
that were removed.
*/

// Your code here 

function popper(arr, num)  {
// ensure num is not negative and doesnt exceed arr length
    if (num < 0) {
        throw new Error('Number of elements to remove cannot be negative');
    }
// calculate number of elements to remove
    num = Math.min(num, arr.length);
    
// extract elements to be removed
    let removedElements = arr.slice(-num);
    
// remove elements from original array
    arr.splice(-num, num);
    
// return new array containing removed elements
    return removedElements;    

}









// let arr1 = ['a', 'b', 'c', 'd', 'e'];
// console.log(popper(arr1, 2)); // [ 'e', 'd' ]
// console.log(arr1); // [ 'a', 'b', 'c' ]

// let arr2 = ['kale', 'spinach', 'collard greens', 'cabbage'];
// console.log(popper(arr2, 1)); // [ 'cabbage' ]
// console.log(arr2); // [ 'kale', 'spinach', 'collard greens' ]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = popper;