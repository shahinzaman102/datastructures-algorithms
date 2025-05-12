/**
 * @param {string} digits
 * @return {string[]}
 */
// Time O(3^N * 4^M)
//   N is the number of digits in the input that maps to 3 letters (e.g. 2, 3, 4, 5, 6, 8)
//   M is the number of digits in the input that maps to 4 letters (e.g. 7, 9)
//
// Space O(3^N * 4^M) since one has to keep O(3^N * 4^M) solutions.

var letterCombinations = function (digits) {
    if (!digits.length) return [];

    const map = {
        2: 'abc', 3: 'def', 4: 'ghi', 5: 'jkl',
        6: 'mno', 7: 'pqrs', 8: 'tuv', 9: 'wxyz'
    };

    const res = [];
    const combination = [];

    const backtrack = (i) => {
        if (i === digits.length) {
            res.push(combination.join(''));
            return;
        }

        for (const c of map[digits[i]]) {
            combination.push(c);   // Add letter in place
            backtrack(i + 1);             // Recurse for the next digit
            combination.pop();     // Backtrack
        }
    };

    backtrack(0);

    return res;
};

// /**
//  * @param {string} digits
//  * @return {string[]}
//  */
// // Time O(3^N * 4^M)
// //   N is the number of digits in the input that maps to 3 letters (e.g. 2, 3, 4, 5, 6, 8)
// //   M is the number of digits in the input that maps to 4 letters (e.g. 7, 9)
// //
// // Space O(3^N * 4^M) since one has to keep O(3^N * 4^M) solutions.

// var letterCombinations = function (digits) {
//     if (!digits.length) return [];

//     const map = {
//         2: 'abc', 3: 'def', 4: 'ghi', 5: 'jkl',
//         6: 'mno', 7: 'pqrs', 8: 'tuv', 9: 'wxyz'
//     };

//     const res = [];
//     const backtrack = (i, s) => {
//         if (i === digits.length) {
//             res.push(s);
//             return;
//         }

//         for (const c of map[digits[i]]) {
//             backtrack(i + 1, s + c);
//         }
//     };

//     backtrack(0, '');

//     return res;
// };
