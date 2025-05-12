/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
    // Example 2:
    let s1 = new Set(nums1);
    // console.log(s1) // Set(3) { 1, 2, 3 }
    let s2 = new Set(nums2);
    // console.log(s2) // Set(2) { 1, 2 }
    let ans = [[], []];

    for (let i of s1) {
        if (!s2.has(i)) {
            ans[0].push(i);
        }
    }

    for (let i of s2) {
        if (!s1.has(i)) {
            ans[1].push(i);
        }
    }

    return ans;
};
// Example 2: nums1 = [1,2,3,3], nums2 = [1,1,2,2]   Output: [3]

// var findDifference = function(nums1, nums2) {
//     let s1 = new Set(nums1);
//     console.log(s1) // Set(3) { 1, 2, 3 }
//     let s2 = new Set(nums2);
//     console.log(s2) // Set(2) { 1, 2 }
//     let ans = [];

//     for (let i of s1) {
//         if (!s2.has(i)) {
//             ans.push(i);
//         }
//     }

//     return ans;
// };
