/*
Define a function wordsLongerThan5 that takes in an array of words. The
function should return a NEW array containing only the words that are longer
than 5 characters.
*/

// Your code here 

function wordsLongerThan5(array)  {

    // initialize empty array to hold results
    let longerWords = [];

    // loop thru each word in input array
    for (let i = 0; i < array.length; i++)  {

        // check if length is > than 5
    if (array[i]. length > 5)  {

        // if true, add to new array
        longerWords.push(array[i]);
      }        
    }       
    return longerWords; 
}











// let words1 = ['bike', 'skateboard','scooter', 'moped'];
// let longerWords1 = wordsLongerThan5(words1);
// console.log(longerWords1);            //=> [ 'skateboard', 'scooter' ]
// console.log(words1 === longerWords1); //=> false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = wordsLongerThan5;