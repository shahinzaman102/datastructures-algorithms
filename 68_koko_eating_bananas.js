/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
    let low = 1;
    let high = Math.max(...piles);

    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        if (check(piles, h, mid)) {
            high = mid; // If possible to finish within `h` hours, try a smaller speed
        } else {
            low = mid + 1; // Otherwise, try a larger speed
        }
    }

    function check(piles, h, mid) {
        let totalHours = 0;
        for (let pile of piles) {
            totalHours += Math.floor(pile / mid); // Calculate hours required for each pile
            if (pile % mid !== 0) {
                totalHours++;
            }
        }
        // console.log(totalHours <= h)
        return totalHours <= h; // Return true if the total hours is within the limit
    }

    return low; // The minimum speed that works
};
