/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function (grid) {
    const n = grid.length;
    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const islandSize = new Map();
    let islandId = 2;  // Start island ids from 2
    let maxArea = 0;

    const dfs = (i, j, id) => {
        if (i < 0 || i >= n || j < 0 || j >= n || grid[i][j] !== 1) return 0;
        grid[i][j] = id;  // Mark the island with a unique id
        let size = 1;
        for (let [dx, dy] of dirs) {
            size += dfs(i + dx, j + dy, id);
        }
        return size;
    };

    // Step 1: Label each island and calculate its size
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                const size = dfs(i, j, islandId);
                islandSize.set(islandId, size);
                maxArea = Math.max(maxArea, size); // Keep track of the largest island
                islandId++;
            }
        }
    }

    // Step 2: Check each 0 to see the potential island size if it was flipped to 1
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0) {
                let possibleArea = 1; // 1 for the current 0 being changed to 1
                const seen = new Set();

                for (let [dx, dy] of dirs) {
                    // [[1, 0], [-1, 0], [0, 1], [0, -1]];
                    const ni = i + dx, nj = j + dy; // new_i & new_j
                    if (ni >= 0 && ni < n && nj >= 0 && nj < n) {
                        const id = grid[ni][nj];
                        if (id > 1 && !seen.has(id)) { // Check connected islands
                            possibleArea += islandSize.get(id);
                            seen.add(id);  // Avoid counting the same island twice
                        }
                    }
                }
                maxArea = Math.max(maxArea, possibleArea);
            }
        }
    }

    return maxArea;
};
