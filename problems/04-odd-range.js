/*
Define a function called oddRange that takes in a number parameter and returns
an array  containing all positive odd numbers up to that number.
*/

// Your code here 

function oddRange(num)  {
// initialize empty array to store odd numbers
    let rangeArray = [];
// initialize variable to 1
    let i = 1;
// while variable is less than or equal to given num
    while (i <= num)   {
// add variable to array
    rangeArray.push(i);
// increment by 2
    i += 2;            
    }  
    return rangeArray;      
}










// console.log(oddRange(13)); // => [ 1, 3, 5, 7, 9, 11, 13 ]
// console.log(oddRange(6));  // => [ 1, 3, 5 ]

/******************* DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = oddRange;