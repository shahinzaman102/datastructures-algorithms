/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let vowels = 'aeiouAEIOU', vowelArr = [], string = '', i = 0;
    s = s.split('');
    // console.log(s) // ['I', 'c', 'e', 'C', 'r', 'e', 'A', 'm']
    for (char of s) {
        if (vowels.includes(char))
            vowelArr.push(char);
    }
    // console.log(vowelArr); // [ 'I', 'e', 'e', 'A' ]
    vowelArr.reverse();
    // console.log(vowelArr); // [ 'A', 'e', 'e', 'I' ]

    for (char of s) {
        if (vowels.includes(char)) {
            string += vowelArr[i];
            i++;
        } else {
            string += char;
        }

    }

    return string;
};
