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
import { logToConsole as lg, tableToConsole as tb } from './logger.js'; //shorthand loggers

const mergeLeftAndRight = ( leftHalf, rightHalf )=> {
  let leftArrPointer = 0;
  let rightArrPointer = 0;
  let resultArr = [];
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
const mergeSort = arr=> {
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

// lg( mergeSort( [2, 1] ) ); //[1,2]
// lg( mergeSort( [2, 1, 4, 3] ) ); //[1,2,3,4]
lg( mergeSort( [3, 2, 1, 13, 8, 5, 0, 1] ) ); //[0, 1, 1, 2, 3, 5, 8, 13]
// lg( mergeSort( [105, 79, 100, 110] ) ); //[79, 100, 105, 110]
