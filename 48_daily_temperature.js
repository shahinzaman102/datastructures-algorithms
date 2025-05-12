/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
/**
 * top-down
 */
var dailyTemperatures = function (temperatures) {
    let stack = new Array();
    let res = new Array(temperatures.length).fill(0);
    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            let idx = stack.pop()
            res[idx] = i - idx;
        }
        stack.push(i);
    }
    return res;
};

// /**
//  * @param {number[]} temperatures
//  * @return {number[]}
//  */
// /**
//  * bottom-up
//  */
// var dailyTemperatures = function (temperatures) {
//     let stack = new Array();
//     let res = new Array(temperatures.length).fill(0);

//     for (let i = temperatures.length - 1; i >= 0; i--) {
//         while (stack.length && temperatures[i] >= temperatures[stack[stack.length - 1]]) {
//             stack.pop();
//         }
//         res[i] = stack[stack.length - 1] - i || 0;
//         stack.push(i);
//     }
//     return res;
// };
