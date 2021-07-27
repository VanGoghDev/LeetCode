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

    let resultArr = [nums.length - 1]

    let leftCounter = 0;
    let rightCounter = nums.length - 1;
    let resultArrCounter = nums.length - 1;

    let i = 0;
    while (i < nums.length) {
        // Обходим с двух концов массива
        // добавляем в результирующий с конца в начало (сначала помещается то число, которое больше)
        leftNumberSquare = nums[leftCounter] ** 2;
        rightNumberSquare = nums[rightCounter] ** 2;
        if (leftNumberSquare > rightNumberSquare) {
            resultArr[resultArrCounter] = leftNumberSquare;
            leftCounter++;
        } else {
            resultArr[resultArrCounter] = rightNumberSquare;
            rightCounter--;
        }
        resultArrCounter--;
        i++;
    }
    return resultArr;
};