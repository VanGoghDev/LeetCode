// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
//  Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let resultArrNegative = [];
    let resultArrPositive = [];
    for (let item of nums) {
        if (item < 0) resultArrNegative.unshift(item ** 2);
        if (item > 0) {
            resultArrPositive.push(item ** 2);
        }
    }
    return resultArrNegative.reverse();;
};