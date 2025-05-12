// Find shortest path unweighted graph
function bfs(graph, root) {

    const distances = Object(graph.length).fill(Infinity);
    // Infinity marks unvisited, unreachable nodes in shortest path.
    distances[root] = 0;

    const queue = [root]; // [ 3 ]

    while (queue.length > 0) {
        const current = queue.shift(); // 3 - 2 - 1 - 0

        for (let neighbor = 0; neighbor < graph[current].length; neighbor++) {
            if (graph[current][neighbor] === 1 && distances[neighbor] === Infinity) {
                distances[neighbor] = distances[current] + 1;
                queue.push(neighbor);
            }
        }
    }

    const result = {};
    for (let i = 0; i < distances.length; i++) {
        result[i] = distances[i];
    }

    return distances;
}

// Find shortest path unweighted graph
const graph = [ // indexes of 1s represents the edges (vertex to vertex)
    [0, 1, 0, 0], // vertex(node): 0  (0-1)
    [1, 0, 1, 0], // vertex(node): 1  (0-1-2)
    [0, 1, 0, 1], // vertex(node): 2  (1-2-3)
    [0, 0, 1, 0]  // vertex(node): 3  (2-3)
];  // Graph of the above Matrix : 0-1-2-3

console.log(bfs(graph, 3)); // { '0': 3, '1': 2, '2': 1, '3': 0 }
