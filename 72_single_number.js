/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let result = 0;
    for (let num of nums) {
        result ^= num;
    }
    // console.log(result)
    return result;
};

// Why it doesn't follow Dyncamic Programming ? -->
// The difference lies in state reuse vs. direct computation :
// In countBits, the solution reuses previously computed values (ans[i >> 1]), which is a key trait of Dynamic Programming.
// In singleNumber, XOR directly processes elements without storing or reusing intermediate states, which is not DP—just bit manipulation.
// DP involves memoization; XOR does not.

// a ^ b
// if two inputs are same result = 0
// if two inputs are different result = 1
// formula --> Result=(A AND NOT B) OR (NOT A AND B)
// Where:
// A and B are the two input bits.
// AND is the bitwise AND operator.
// NOT is the bitwise NOT operator (inverts the bits).
// OR is the bitwise OR operator.
// XOR Truth Table
// Bit 1	Bit 2	Bit 1 XOR Bit 2
// 0	0	0
// 0	1	1
// 1	0	1
// 1	1	0
