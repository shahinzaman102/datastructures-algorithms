/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length <= 2) return Math.max(...nums);

    let max = Math.max(nums[0], nums[1]); // 7
    let first = nums[0]; // 2

    for (let i = 2; i < nums.length; i++) { // 11 - 10 - 12
        let maxCurrent = Math.max(max, first + nums[i]);
        first = max; // 7 - 11 - 11
        max = maxCurrent; // 11 - 11 - 12
    }

    return max;
};
