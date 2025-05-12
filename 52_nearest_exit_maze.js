/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function (maze, entrance) {
    // Directions for moving in the maze: right, left, down, up
    let directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    let queue = [[...entrance, 0]]; // Initialize BFS queue with entrance and starting distance of 0
    let rows = maze.length, cols = maze[0].length;

    // Mark the entrance as visited by changing it to a wall ('+') to avoid revisiting
    maze[entrance[0]][entrance[1]] = '+';

    // Start BFS
    while (queue.length > 0) {
        const [row, col, steps] = queue.shift(); // Dequeue the current cell
        // Example 1: [1,2,0] // [1,1,1]     Example 2: [1,0,0] // [1,1,1]

        // Explore the 4 possible directions
        for (let [dx, dy] of directions) {
            let newRow = row + dx, newCol = col + dy;
            // Example 1: [1,3] - [1,1] - [2,2] - [0,2]
            // Example 2: [1,1] - [1,-1] - [2,0] - [0,0]  // [1,2]

            // Check if the new cell is valid
            if (newRow >= 0 && newRow < rows && newCol >= 0
                && newCol < cols && maze[newRow][newCol] === '.') {

                // Check if the new cell is an exit (on the boundary)
                if (newRow === 0 || newRow === rows - 1
                    || newCol === 0 || newCol === cols - 1) {
                    return steps + 1; // Exit found, return the number of steps
                } // Example-1 : 1    Example-2 : 2

                // Mark the cell as visited and add it to the queue for further exploration
                maze[newRow][newCol] = '+';
                queue.push([newRow, newCol, steps + 1]);
            }
        }
    }

    // If no exit is found, return -1
    return -1;
};
