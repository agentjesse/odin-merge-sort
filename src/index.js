/* Next task:
-  Build a function mergeSort that takes in an array and returns a sorted array,
 using a recursive merge sort methodology. An input of [3,1,4,2] should return [1,2,3,4].
*/
/* pattern finding chart
mS([1])   = [1]
mS([2,1]) = [1,2]
mS([3,1,4,2]) = mS([3,1]) merged with mS([4,2])
pattern found: mergesort needs to return a sorted array

example of program flow:
          [3,1,4,2]    received 2 elem arr, split it..
        [3,1]   [4,2]  each arr must be sorted..
        [1,3]   [2,4]  after calling mergesort to sort each array..
          [1,2,3,4]    merge left and right (using another fn)
*/

//For Node.js, when importing local modules, include the file extension in the import statement.
import { logToConsole as lg, objectToString as ots } from './logger.js'; //shorthand loggers

const mergeLeftAndRight = ( leftHalf, rightHalf )=> {
  let leftArrPointer = 0;
  let rightArrPointer = 0;
  const resultArr = [];
  //loop over array elements while their pointers are within the arrays
  while ( leftArrPointer < leftHalf.length && rightArrPointer < rightHalf.length ) {
    if ( leftHalf[leftArrPointer] < rightHalf[rightArrPointer] ) {
      resultArr.push( leftHalf[leftArrPointer] );
      leftArrPointer++;
    } else {
      resultArr.push( rightHalf[rightArrPointer] );
      rightArrPointer++;
    }
  }
  // Add any remaining elements from leftHalf arr
  while (leftArrPointer < leftHalf.length) {
    resultArr.push(leftHalf[leftArrPointer]);
    leftArrPointer++;
  }
  // Add any remaining elements from rightHalf arr
  while (rightArrPointer < rightHalf.length) {
    resultArr.push(rightHalf[rightArrPointer]);
    rightArrPointer++;
  }

  return resultArr;
};

//mergeSort needs to return a sorted array so it can be called recursively with sub arrays
export const mergeSort = (arr)=> {
  //base case 1: immediately return arrays of one element as they're already sorted
  if (arr.length === 1) return arr;
  //otherwise, begin sorting the multi element array by dividing it into halves
  const midIndex = Math.floor( arr.length / 2 );
  let leftHalf = arr.slice( 0, midIndex );
  let rightHalf = arr.slice( midIndex );

  //to sort both halves, we can think of each array as something mergesort can handle.
  //remember that single element arrs will just return as they are already sorted
  leftHalf = mergeSort( leftHalf );
  rightHalf = mergeSort( rightHalf );

  //after getting 2 sorted arrays, we have to merge them
  return mergeLeftAndRight( leftHalf, rightHalf );
};

// logger type tests:
// lg( mergeSort( [2, 1] ) ); //[1,2]
// lg( mergeSort( [2, 1, 4, 3] ) ); //[1,2,3,4]
// lg( mergeSort( [3, 2, 1, 13, 8, 5, 0, 1] ) ); //[0, 1, 1, 2, 3, 5, 8, 13]
// lg( mergeSort( [105, 79, 100, 110] ) ); //[79, 100, 105, 110]

//jest testing for this file in index.test.js is done through ES Module exports
export const sum = (a, b)=> a + b; //extra example fn for testing

export const capitalize = (str)=> str[0].toUpperCase().concat(str.slice(1));

export const reverseString = (str)=> str.split('').reverse().join('');

export const calculator = {
  add: (a, b)=> a + b,
  subtract: (a, b)=> a - b,
  divide: (a, b)=> a / b,
  multiply: (a, b)=> a * b
};

export const caesarCipher = (str, shiftFactor)=> {
  const result = [];
  let charCode; let newCharCode;
  //split up the string to handle each char string
  str.split('').forEach( (char)=> {
    charCode = char.charCodeAt(0);
    if ( char.match( /^[A-Z]$/ ) ) {
    //path to handle uppercase chars; their integers: 65 to 90 inclusive
      if (charCode + shiftFactor > 90) { //when wrapping needed...
        //handle shifting past Z by mapping to a simpler domain and back. First map
        //character's code to a 0-25 alphabet domain by subtracting A's UTF-16 domain code
        //of 65; then add the shift; then calculate shift for mapping back by doing mod 26;
        //then map back to UTF-16 domain by adding shift and 65.
        newCharCode = ( ( charCode - 65 + shiftFactor ) % 26 ) + 65;
        result.push( String.fromCharCode(newCharCode) );
      } else { //no wrapping needed? just add shifted
        result.push( String.fromCharCode(charCode + shiftFactor) );
      }
    } else if ( char.match( /^[a-z]$/ ) ) {
    //path to handle lowercase chars; their integers: 97 to 122 inclusive
      if (charCode + shiftFactor > 122) {
        newCharCode = ( ( charCode - 97 + shiftFactor ) % 26 ) + 97;
        result.push( String.fromCharCode(newCharCode) );
      } else { result.push( String.fromCharCode(charCode + shiftFactor) ); }
    } else { //path to handle non letters / punctuation
      result.push(char);
    }
  } );
  // lg(result)
  return result.join(''); //return string of joined result array
};

//node debugger testing
// lg( caesarCipher('Hi, Jerry!',3) )
