/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
    // handle the base case
    if (str1 + str2 !== str2 + str1) return '';

    let a = str1.length // 6
    let b = str2.length // 4

    while (b) {
        let temp = b // 4, 2
        b = a % b // 2, 0
        a = temp // 4, 2
    }

    return str1.slice(0, a);
};
