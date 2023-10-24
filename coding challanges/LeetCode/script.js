// link: https://leetcode.com/problems/add-two-integers/

//------------ add-two-integers ---------------//
// Biginner Guide

const sum = function (num1, num2){
  return num1 + num2
}

//------------- 1480. Running Sum of 1D Array -------//
const numbers = [1, 4, 5, 7, 8]

const runningSum = function(nums) {
  let runningSum = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    runningSum.push(runningSum[i - 1] + nums[i])
  }
  return runningSum
}

console.log(runningSum(numbers));