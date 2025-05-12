/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    let l = 0;
    let r = nums.length - 1;
    while (l < r) {
        const mid = Math.floor((l + r) / 2);
        if (nums[mid + 1] > nums[mid]) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }
    return l;
    // return nums[l];
};

// var findLeastElement = function(nums) {
//     let l = 0;
//     let r = nums.length - 1;
//     while (l < r) {
//         const mid = Math.floor((l + r) / 2);
//         if (nums[mid] > nums[r]) {
//             l = mid + 1;
//         } else {
//             r = mid;
//         }
//     }

//     return l;
//     // return nums[l];
// };
