function permAlone(str) {

    function generatePerms(arr) {
        if (arr.length === 1) return [arr];

        let perms = [];
        for (let i = 0; i < arr.length; i++) {
            let rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
            let subPerms = generatePerms(rest);
            subPerms.forEach(elem => perms.push([arr[i], ...elem]));
        }

        return perms;
    }

    const perms = generatePerms(str.split(''));
    // console.log(perms)

    // Filter out permutations with consecutive repeated chars with regex.
    const validPerms = perms.filter(perm => !/(.)\1/.test(perm.join('')));
    // console.log(validPerms)
    // !/([,.])(?=\1)/ -- this will give wrong - 6 insted of 2

    return validPerms.length;
}

// Test here.
console.log(permAlone("aab"));

// Explanation:
// perm.join(''): Converts the array perm back into a string (e.g., ['a', 'b', 'a'] becomes "aba").
// /(.)\1/: This regular expression checks for any repeated character:
// (.): Captures any character.
// \1: Refers to the first captured character, ensuring it's repeated.
  // .test(): Returns true if the regular expression finds a match (i.e., consecutive repeated characters), and false otherwise.
