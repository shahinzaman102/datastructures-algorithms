function pairwise(arr, targetNum) {
    let sumIndices = 0;
    let usedIndices = new Set();

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {

            if (arr[i] + arr[j] === targetNum && !usedIndices.has(i)
                && !usedIndices.has(j)) {

                sumIndices += i + j;
                usedIndices.add(i);
                usedIndices.add(j);
                break;
            }
        }
    }

    return sumIndices;
}
console.log(pairwise([7, 9, 11, 13, 15], 20)); // Output: 6
