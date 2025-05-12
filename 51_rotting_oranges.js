/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    const ROWS = grid.length;
    const COLS = grid[0].length;
    const queue = [];
    let freshOranges = 0;
    let minutes = 0;

    // Step 1: Add all rotten oranges to the queue and count fresh oranges.
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (grid[r][c] === 2) {
                queue.push([r, c]);
                // console.log(queue) // Example 1:  [ [ 0, 0 ] ]
            } else if (grid[r][c] === 1) {
                freshOranges++;
            }
        }
    }
    // console.log(freshOranges) // Example 1:  6

    // If no fresh oranges, return 0
    if (freshOranges === 0) return 0;

    // Step 2: BFS to rot fresh oranges
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    while (queue.length > 0) {
        const size = queue.length;  // Example 1 -->
        // [0,0] - [1,0] [0,1] - [1,1] [0,2] - [2,1] - [2,2]
        // min = 0      1             2          3       4
        for (let i = 0; i < size; i++) {
            const [row, col] = queue.shift();

            for (let [dr, dc] of directions) {
                const newRow = row + dr;
                const newCol = col + dc;

                if (newRow >= 0 && newRow < ROWS && newCol >= 0
                    && newCol < COLS && grid[newRow][newCol] === 1) {

                    grid[newRow][newCol] = 2; // Rot this orange
                    freshOranges--;
                    queue.push([newRow, newCol]);
                }
            }
        }

        // Only increment time if we rotted fresh oranges in this round
        if (queue.length > 0) minutes++;
    }

    // Step 3: Check if any fresh oranges remain
    return freshOranges === 0 ? minutes : -1;
};
