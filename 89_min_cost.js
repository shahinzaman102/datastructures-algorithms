/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    if (cost.length === 0) return 0;
    if (cost.length === 1) return 0;

    let prev1 = cost[0];
    let prev2 = cost[1];

    for (let i = 2; i < cost.length; i++) {
        let current = Math.min(prev1, prev2) + cost[i]; // *****
        prev1 = prev2;
        prev2 = current;
    }

    return Math.min(prev1, prev2);
};
