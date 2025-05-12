/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function countBits(n) {
    // const ans = new Array(n + 1);
    // ans[0] = 0;
    const ans = new Array(n + 1).fill(0);

    for (let i = 1; i <= n; i++) { // bit number at i th index -->

        ans[i] = ans[i >> 1] + (i & 1); // value at index i/2 + mask last bit of i
    }
    // ans[1] = ans[0000]   + (0001) --> ans[0] + 1 = 1
    // ans[2] = ans[0001]   + (0000) --> ans[1] + 0 = 1
    // ans[3] = ans[0001]   + (0001) --> ans[1] + 1 = 2
    // ans[4] = ans[0010]   + (0000) --> ans[2] + 0 = 1
    // ans[5] = ans[0010]   + (0001) --> ans[2] + 1 = 2

    return ans;
}
