// this is my HackerRank solutions:
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