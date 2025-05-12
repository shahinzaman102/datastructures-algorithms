/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
    let bitMask = 1;
    let count = 0;
    for (let i = 0; i < 32; i++) {
        if (n & bitMask)
            count++;
        n >>= bitMask;
    }
    return count;
};
