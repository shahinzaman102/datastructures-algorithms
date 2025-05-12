/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */

var maxProfit = function (prices, fee) {
    const n = prices.length;
    let profit = 0, buyPrice = prices[0];

    for (let i = 1; i < n; i++) {
        profit = Math.max(profit, prices[i] - buyPrice - fee)
        buyPrice = Math.min(buyPrice, prices[i] - profit)
    }
    return profit
};
