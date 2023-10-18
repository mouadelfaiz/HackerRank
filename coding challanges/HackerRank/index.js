// this is my HackerRank solutions:
//----------------- solution 1 --------------------//
/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function compareTriplets(a, b) {
  let bobScore = 0;
  let aliceScore = 0;

  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
      aliceScore++;
    } else if (b[i] > a[i]) {
      bobScore++;
    }
  }
  const resultArray = [aliceScore, bobScore];
  return resultArray;
}

// mistakes:
// 1-Incorrect initialization initializing bobScore and aliceScore inside the loop
// 2-incorrect usage of return, using the return inside the loop and using return multiple time, which will exit the functin on the first iteration, i should use the varaibles to accumulate the scores and then return the result after the loop is done.

//------------------ DIAGONAL DIFFERENCE --------------------//
// @link https://www.hackerrank.com/challenges/diagonal-difference/problem

let input = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

function diagonalDifference(arr) {
  const num = arr.length;
  let sumLeftDiagonal = 0;
  let sumRightDiagonal = 0;

  for (let i = 0; i < num; i++) {
    sumLeftDiagonal += arr[i][i];
    sumRightDiagonal += arr[i][num - 1 - i];
  }

  const absoluteDiagonalDifference = Math.abs(
    sumLeftDiagonal - sumRightDiagonal
  );
  return absoluteDiagonalDifference;
}

// console.log(diagonalDifference(input));

// mistakes
// pass 2 test case out of 10

//------------------ Plus Minus --------------------//
// @link https://www.hackerrank.com/challenges/plus-minus/problem?isFullScreen=true

const input2 = [-4, 3, -9, 0, 4, 1];

function plusMinus(arr) {
  // Write your code here
  const arrLength = arr.length;
  let positiveNum = 0;
  let negativeNum = 0;
  let numZero = 0;
  for (let i = 0; i < arrLength; i++) {
    if (arr[i] > 0) {
      positiveNum++;
    } else if (arr[i] < 0) {
      negativeNum++;
    } else {
      numZero++;
    }
  }
  const positiveNumRatio = positiveNum / arrLength;
  const negativeNumRatio = negativeNum / arrLength;
  const zeroRatio = numZero / arrLength;
  console.log(positiveNumRatio.toFixed(6));
  console.log(negativeNumRatio);
  console.log(zeroRatio);
}

// plusMinus(input2)
// console.log(plusMinus(input2))

//------------------ Staircase --------------------//

const n = 4;

function staircase(n) {
  // Write your code here
  let outputString = "";
  for (let i = 1; i <= n; i++) {
    outputString += "#"
    console.log(outputString.split('').reverse().join(''));
    const reversedString = outputString.split('').reverse().join('')
    // console.log(reversedString);
  }
}

staircase(n);


