// Shortest Distance Between Two Specific Friends
function bfs(graph, root) {
    const distances = Array(graph.length).fill(Infinity);
    distances[root] = 0;

    const queue = [root];

    while (queue.length > 0) {
        const current = queue.shift();

        for (let neighbor = 0; neighbor < graph[current].length; neighbor++) {
            if (graph[current][neighbor] === 1 && distances[neighbor] === Infinity) {
                distances[neighbor] = distances[current] + 1;
                queue.push(neighbor);
            }
        }
    }

    return distances;  // Return the distances array
}

// Function to find the shortest distance between two friends
function shortestDistanceBetweenFriends(graph, A, B) {
    const distances = bfs(graph, A);
    return distances[B];  // Return the distance from A to B
}

// Example usage
const graph = [
    [0, 1, 0, 0],  // City 0 is connected to City 1
    [1, 0, 1, 0],  // City 1 is connected to City 0 and City 2
    [0, 1, 0, 1],  // City 2 is connected to City 1 and City 3
    [0, 0, 1, 0]   // City 3 is connected to City 2
];

const A = 0;  // Friend A (e.g., living in City 0)
const B = 3;  // Friend B (e.g., living in City 3)

const distance = shortestDistanceBetweenFriends(graph, A, B);
console.log(`Shortest distance btwn Friend A and B is: ${distance}`); // 3
