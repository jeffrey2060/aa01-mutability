/*
Write a function tripleSequence that takes in two numbers, start and length. The
function should return an array representing a sequence that begins with start
and is length elements long. In the sequence, every element should be 3 times
the previous element. Assume that the length is at least 1.
*/

// Your code here 

function tripleSequence(start, length) {
// initialize result array with start value
    let sequence = [start];
    
// generate sequence until it reaches specified length
    while (sequence.length < length)  {

// triple last element and add it to array
    sequence.push(sequence[sequence.length - 1] * 3);        
    }    
    return sequence;
}










// console.log(tripleSequence(2, 4)); // [2, 6, 18, 54]
// console.log(tripleSequence(4, 5)); // [4, 12, 36, 108, 324]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = tripleSequence;