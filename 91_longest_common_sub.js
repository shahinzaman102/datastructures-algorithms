/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    const length1 = text1.length;
    const length2 = text2.length;

    // Create a 2D array to store the lengths of longest common subsequences
    // for all subproblems, initialized with zero
    const dp = [];
    for (let i = 0; i < length1 + 1; i++) {
        dp.push(new Array(length2 + 1).fill(0));
    }
    // console.log(dp)

    // Build the dp array from the bottom up
    for (let i = 1; i <= length1; ++i) {
        for (let j = 1; j <= length2; ++j) {
            // If characters match, take diagonal value and add 1
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            }
            // If characters do not match, take the maximum value from 
            // the left (dp[i][j-1]) or above (dp[i-1][j])
            else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    // console.log(dp)

    // The bottom-right cell contains the length of the longest
    // common subsequence of text1 and text2
    return dp[length1][length2];
};
