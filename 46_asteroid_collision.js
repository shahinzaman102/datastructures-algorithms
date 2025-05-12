/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
    const res = []
    // [-2, -1, 1, 2] --> [-2, -1, 1, 2]
    // [5,2,-10] = [-10]
    for (let i = 0; i < asteroids.length; i++) {
        const last = res[res.length - 1]
        // console.log(last)
        const cur = asteroids[i]

        if (!res.length || last < 0 || cur > 0) {
            res.push(cur)
        } else if (-cur == last) {
            res.pop()
        } else if (-cur > last) {
            res.pop()
            i--
        }
    }

    return res
};

// 735. Asteroid Collision

// [5,10,-5] --> [5,10]
// [8,-8] --> []
// [10,2,-5] --> [10]
// [-2, -1, 1, 2] --> [-2, -1, 1, 2]
// [5,2,-10] = [-10]
