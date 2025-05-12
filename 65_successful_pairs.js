/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (spells, potions, success) {
    const pairs = [];
    potions.sort((a, b) => a - b);
    const spellsLength = spells.length;
    const potionsLength = potions.length;

    let maxSpellValueWithZeroSuccess = 0; // max value of a spell that will never be successful

    for (let i = 0; i < spellsLength; i++) {
        let count = 0;
        if (spells[i] > maxSpellValueWithZeroSuccess) {
            // binary search
            let left = 0;
            let right = potionsLength - 1;
            while (left <= right) {
                // const mid = Math(left + right) >> 1;
                const mid = Math.floor((left + right) / 2);
                if (spells[i] * potions[mid] >= success) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }
            count = potionsLength - left;
            if (count == 0) maxSpellValueWithZeroSuccess = spells[i];
        }
        pairs.push(count);
    }
    return pairs;
};
