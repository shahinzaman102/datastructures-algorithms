// Dijkstra - Find shortest distance between two Friends in an weighted graph
class MinPriorityQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(node, priority) {
        this.queue.push({ node, priority });
        this.queue.sort((a, b) => a.priority - b.priority);  // Sort by priority (ascending)
    }

    dequeue() {
        return this.queue.shift();  // Dequeue the element with the smallest priority
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}

function dijkstra(graph, root) {
    const distances = Array(graph.length).fill(Infinity);  // Distances array initialized with Infinity
    distances[root] = 0;

    const pq = new MinPriorityQueue();
    pq.enqueue(root, 0);

    while (!pq.isEmpty()) {
        const { node: current } = pq.dequeue();

        for (let neighbor = 0; neighbor < graph[current].length; neighbor++) {
            const weight = graph[current][neighbor];
            if (weight > 0) {  // Only consider valid connections (non-zero weights)
                const newDist = distances[current] + weight;

                // If a shorter path is found
                if (newDist < distances[neighbor]) {
                    distances[neighbor] = newDist;
                    pq.enqueue(neighbor, newDist);  // Enqueue neighbor with updated distance
                }
            }
        }
    }

    return distances;  // Return the distances array from root to all nodes
}

// Function to find the shortest distance between two friends (using Dijkstra's algorithm)
function shortestDistanceBetweenFriends(graph, A, B) {
    const distances = dijkstra(graph, A);
    return distances[B];  // Return the shortest distance from A to B
}

// Example usage with a weighted graph
const graph = [
    [0, 4, 0, 0],  // City 0 is connected to City 1 with a weight of 4
    [4, 0, 8, 0],  // C 1 is connected to C 0 (weight 4) & C 2 (weight 8)
    [0, 8, 0, 7],  // C 2 is connected to C 1 (weight 8) & C 3 (weight 7)
    [0, 0, 7, 0]   // City 3 is connected to City 2 with a weight of 7
];

const A = 0;  // Friend A (living in City 0)
const B = 3;  // Friend B (living in City 3)

const distance = shortestDistanceBetweenFriends(graph, A, B);
console.log(`Shortest distance btwn Friend A and B is: ${distance}`);
// Output: 19 
