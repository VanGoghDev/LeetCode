// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

/**
 * @param {number[]} nums
 * @return {number}
 */
let findMaxConsecutiveOnes = function (nums) {
    let consecutiveCount = 0;
    let maxConsecutiveCount = consecutiveCount;
    for (let item of nums) {
        item === 1 ? consecutiveCount++ : consecutiveCount = 0;
        if (consecutiveCount > maxConsecutiveCount) maxConsecutiveCount = consecutiveCount;
    }
    return maxConsecutiveCount;
};