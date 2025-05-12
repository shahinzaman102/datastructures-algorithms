/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function (s) {
    let result = [];
    let count = 1;

    result.push(s[0]); // Start with the first character in the result array

    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            count++; // Increment count if the current char matches the previous one
        } else {
            count = 1; // Reset count if a new character is found
        }

        // Only add the character if it does not make three consecutive identical characters
        if (count < 3) {
            result.push(s[i]);
        }
    }

    return result.join(''); // Join the result array to form the final string
};
