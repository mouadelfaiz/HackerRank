// link: https://leetcode.com/problems/add-two-integers/

//------------ add-two-integers ---------------//
// Biginner Guide

const sum = function (num1, num2){
  return num1 + num2
}

//------------- 1480. Running Sum of 1D Array -------//


const runningSum = function(nums) {
  let runningSum = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    runningSum.push(runningSum[i - 1] + nums[i])
  }
  return runningSum
}

