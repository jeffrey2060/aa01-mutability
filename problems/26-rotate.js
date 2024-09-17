/*
Write a function rotate(array, num) that takes in an array and a number as args.
When the num is positive, the elements of the array should be rotated to the
right. When the num is negative, the elements of the array should be rotated to
the left. The function should mutate the original array.
*/

// Your code here 

function rotate(array, num)  {
// handle edge cases
    if (array.length === 0) return;
    
// normalize num to be within bounds of array length
    const length = array.length;
    num = num % length; 
    
// if num is neg, convert it to positive rotation
    if (num < 0) {
        num = length + num;
    }    
// perform rotation
    if (num > 0) {
// rotate to the right
    array.unshift(...array.splice(-num, num));
    
    } else if (num < 0) { // rotate to the left
        array.push(...array.splice(0, -num));
    }    
}











// let arr = ['a', 'b', 'c', 'd', 'e'];
// rotate(arr, 2);
// console.log(arr); // [ 'd', 'e', 'a', 'b', 'c' ]

// let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
// rotate(animals, -1);
// console.log(animals); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = rotate;