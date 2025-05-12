/**
 * @param {number[][]} grid
 * @return {number}
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {

    // console.log(grid)
    const n = grid.length
    // console.log(n)
    let count = 0
    const rows = new Map()
    // console.log(rows)

    for (let r = 0; r < n; r++) {
        const row = JSON.stringify(grid[r])
        rows.set(row, 1 + (rows.get(row) || 0))
        // console.log(rows)
    }

    for (let c = 0; c < n; c++) {
        const col = JSON.stringify(grid.map(row => row[c]))
        count += (rows.get(col) || 0)
        // console.log(col)
    }

    return count
};
