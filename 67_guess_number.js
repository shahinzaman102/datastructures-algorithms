/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
    let low = 1, high = n;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const guess = this.guess(mid);
        // console.log(guess) --> 1, -1, 0
        if (guess === 0) {
            return mid;
        } else if (guess === -1) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1;
};
