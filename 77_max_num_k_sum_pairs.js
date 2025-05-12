/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
    nums.sort((a, b) => a - b);
    // console.log(nums) // [ 1, 3, 3, 3, 4 ]

    let left = 0, right = nums.length - 1;
    let count = 0;

    while (left < right) {
        if (nums[left] + nums[right] === k) {
            count++;
            left++;
            right--;
        }
        else if (nums[left] + nums[right] < k)
            left++;
        else if (nums[left] + nums[right] > k)
            right--;
    }

    return count;
};
