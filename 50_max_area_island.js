/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    // Get the dimensions of the grid
    const rows = grid.length;
    const cols = grid[0].length;

    // Function to perform DFS and calculate the area of an island
    function dfs(r, c) {
        // Base case: if we are out of bounds or at water (0), return 0
        if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === 0) {
            return 0;
        }

        // Mark the current cell as visited by setting it to 0 (water)
        grid[r][c] = 0;

        // Initialize the area to 1 for the current cell
        let area = 1;

        // Explore all four possible directions (up, down, left, right)
        area += dfs(r - 1, c); // Up
        area += dfs(r + 1, c); // Down
        area += dfs(r, c - 1); // Left
        area += dfs(r, c + 1); // Right

        return area;
    }

    // Variable to track the maximum area of an island
    let maxArea = 0;

    // Traverse the grid
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            // If we find a land cell (1), calculate the area of the island
            if (grid[r][c] === 1) {
                maxArea = Math.max(maxArea, dfs(r, c));
            }
        }
    }

    return maxArea;
};
