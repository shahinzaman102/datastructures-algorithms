/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    let countMap = new Map();  // Use a Map to store the frequency of each element

    // Step 1: Count the occurrences of each element
    for (let num of arr) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }
    // console.log(countMap) // Example output: Map(4) { 0 => 2, 1 => 4, 10 => 1, -3 => 3 }

    // Step 2: Use a set to check if all counts are unique
    let occurrenceSet = new Set();  // This will store unique counts

    for (let count of countMap.values()) {
        // Use Map's .values() to get the counts directly
        if (occurrenceSet.has(count)) {
            return false;  // If a count is already in the set, it's not unique
        }
        occurrenceSet.add(count);
    }
    // console.log(occurrenceSet) // Example output: Set(4) { 2, 4, 1, 3 }

    return true;  // All counts are unique
};
