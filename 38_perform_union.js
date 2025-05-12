function union(setA, setB) {
    // Create a Set with elements from both sets
    let unionSet = new Set([...setA, ...setB]);
    // Convert the Set back to an array
    return Array.from(unionSet); // we could also return : unionSet
}

// Example usage
let setA = ['a', 'b', 'c'];
let setB = ['a', 'b', 'd', 'e'];
let result = union(setA, setB);

console.log(unionSet); // Output: ['a', 'b', 'c', 'd', 'e']
