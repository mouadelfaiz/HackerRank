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

//------------------ solution 2--------------------//
//* DIAGONAL DIFFERENCE *//
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

  const absoluteDiagonalDifference = Math.abs(sumLeftDiagonal - sumRightDiagonal);
  return absoluteDiagonalDifference;
}

console.log(diagonalDifference(input));

// mistakes
// pass 2 test case out of 10
