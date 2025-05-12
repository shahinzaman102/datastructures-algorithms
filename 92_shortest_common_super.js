/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
function shortestCommonSupersequence(str1, str2) {
    const length1 = str1.length;
    const length2 = str2.length;

    // Step 1: Compute the Longest Common Subsequence (LCS) table
    const dp = [];
    for (let i = 0; i < length1 + 1; i++) {
        dp.push(new Array(length2 + 1).fill(''));
    }
    // console.log(dp)

    for (let i = 1; i <= length1; i++) {
        for (let j = 1; j <= length2; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + str1[i - 1];
            } else {
                dp[i][j] = dp[i - 1][j].length > dp[i][j - 1].length ? dp[i - 1][j] : dp[i][j - 1];
            }
        }
    }
    // console.log(dp)

    // Step 2: Build the Shortest Common Supersequence using the LCS
    let i = length1, j = length2;
    let scs = '';
    // Traverse both strings based on the LCS
    while (i > 0 && j > 0) {
        if (str1[i - 1] === str2[j - 1]) {
            scs = str1[i - 1] + scs;
            i--;
            j--;
        } else if (dp[i - 1][j].length > dp[i][j - 1].length) {
            scs = str1[i - 1] + scs;
            i--;
        } else {
            scs = str2[j - 1] + scs;
            j--;
        }
    }

    // If there are remaining characters in str1 or str2, append them
    while (i > 0) {
        scs = str1[i - 1] + scs;
        i--;
    }
    while (j > 0) {
        scs = str2[j - 1] + scs;
        j--;
    }

    return scs;
}
