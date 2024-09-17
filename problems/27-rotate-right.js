/*
Write a function rotateRight(array, num) that takes in an array and a number as
args. The function should return a new array where the elements of the array are
rotated to the right num times. The function should not mutate the original
array and instead return a new array.

HINT: you can use Array's slice() method to create a copy of an array
*/

// Your code here 

function rotateRight(array, num) {
// handle edge cases
    if (array.length === 0) return [];
    
// normalize num to be within bounds of array length
    const length = array.length;
    num = num % length;
    
// if num is negative, convert it to pos rotation
    if (num < 0) {
        num = length + num;
    }    
// if num is 0, return a copy of original array
    if (num === 0) {
        return array.slice();
    }
// perform rotation and return new array
    return array.slice(-num).concat(array.slice(0, -num));    

}





// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(rotateRight(arr, 2)); // [ 'd', 'e', 'a', 'b', 'c' ]
// console.log(arr); // [ 'a', 'b', 'c', 'd', 'e' ]

// let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
// console.log(rotateRight(animals, 3)); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
// console.log(animals); // [ 'wombat', 'koala', 'opossum', 'kangaroo' ]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = rotateRight;