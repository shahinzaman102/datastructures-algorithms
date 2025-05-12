/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    // creates array but doesn't save back to it -->
    // s.split(' ');  //  a good   example
    // creates array and saves it back to s -->
    s = s.split(' ');  //  [ 'a', 'good', '', '', 'example' ]
    // let s = s.split(' ');  //  SyntaxError: Identifier 's' has already been declared
    let res = [];
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] != '') res.push(s[i]);
    }
    return res.join(' ');
};
