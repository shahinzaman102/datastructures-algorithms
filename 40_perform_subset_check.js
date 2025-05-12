function isSubsetOf(setA, setB) {
    // Check if every element in setA is also in setB
    for (let elem of setA) {
        if (!setB.has(elem)) {
            return false;
        }
    }
    return true;
}

// Example usage
let setA = new Set(['a', 'b']);
let setB = new Set(['a', 'b', 'c', 'd']);
let result = isSubsetOf(setA, setB);

console.log(result); // Output: true
