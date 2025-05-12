const intersection = (setA, setB) => {
    // Create a new Set for the intersection result
    let intersectionSet = new Set();

    // Iterate over elements of setA
    for (let elem of setA) {
        // Check if the element is also in setB
        if (setB.has(elem)) {
            intersectionSet.add(elem);
        }
    }

    // Convert the Set back to an array and return
    return Array.from(intersectionSet);
}

// Example usage
let setA = new Set(['a', 'b', 'c']);
let setB = new Set(['a', 'b', 'd', 'e']);
let result = intersection(setA, setB);

console.log(result); // Output: ['a', 'b']
