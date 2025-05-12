/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function (n, connections) {
    // Create adjacency list to represent the graph
    const adjacencyList = new Array(n).fill().map(() => []);

    // Fill the adjacency list with connections
    for (let [from, to] of connections) {
        adjacencyList[from].push(to);     // Forward direction
        adjacencyList[to].push(-from);    // Reverse direction (indicated by negative sign)
    }

    // Track visited nodes
    const visited = new Array(n).fill(false);
    const queue = [0]; // Start BFS from node 0
    visited[0] = true;
    let changeCount = 0;

    while (queue.length > 0) {
        const currentNode = queue.shift(); // Dequeue a node
        //               0 - 1 - 4 - 3 - 5
        // changeCount :     1   1   2   3

        // Explore all neighbors of the current node
        for (let neighbor of adjacencyList[currentNode]) {
            [1, -4] // [-0,3] // [0,5] // [-1,-2] // [-4]
            let nextNode = Math.abs(neighbor);

            // Continue only if the next node hasn't been visited
            if (!visited[nextNode]) {
                visited[nextNode] = true; // Mark as visited
                queue.push(nextNode); // Enqueue the next node

                // If neighbor is positive, it means we need to reverse the direction
                changeCount += (neighbor > 0 ? 1 : 0);
            }
        }
    }

    return changeCount;
};
