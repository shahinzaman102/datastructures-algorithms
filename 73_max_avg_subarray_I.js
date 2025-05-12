/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    if (nums.length === 1) return nums[0];

    let sum = 0, avg = -Infinity, count = 0;  // nums = [4,0,4,3,3] ; k = 5
    let left = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        count++;

        if (count === k) {
            avg = Math.max(avg, sum / k);
            sum -= nums[left];
            left++;
            count--;
        }
    }

    return avg;
};
