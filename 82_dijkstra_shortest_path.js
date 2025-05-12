// Dijkstra - Find shortest path in an weighted graph
class MinPriorityQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(node, priority) {
        this.queue.push({ node, priority });
        // Sort the queue based on priority (ascending)
        this.queue.sort((a, b) => a.priority - b.priority);
    }

    dequeue() {
        return this.queue.shift(); // Remove and return the element with the smallest priority
    }

    isEmpty() {
        return this.queue.length === 0; // Check if the queue is empty
    }
}

function dijkstra(graph, root) {
    const distances = Array(graph.length).fill(Infinity); // Initialize distances with Infinity
    distances[root] = 0; // Distance to the root is 0
    // [0, Infinity, Infinity, Infinity]
    // [0, 4, 12, Infinity]
    // [0, 4, 12, 19]

    const pq = new MinPriorityQueue(); // Create a new priority queue
    pq.enqueue(root, 0); // Start with the root node  // {'0': 0}

    while (!pq.isEmpty()) {
        const { node: current } = pq.dequeue(); // Get the node with the smallest distance
        // console.log({ node: current }) // {node:0}-{node:1}-{node:2}-{node:3}
        for (let neighbor = 0; neighbor < graph[current].length; neighbor++) {
            const weight = graph[current][neighbor]; // Get the edge weight
            if (weight > 0) { // If there is an edge (weight > 0)
                const newDist = distances[current] + weight; // Calculate new distance
                // console.log(newDist) // 4 - 8 - 12 - 20 - 19 - 26 
                // If the new distance is smaller, update the distance and enqueue the neighbor
                if (newDist < distances[neighbor]) {
                    distances[neighbor] = newDist;
                    pq.enqueue(neighbor, newDist); // Enqueue with the new distance
                    // '1': 4 - '2': 12 - '3': 19
                }
            }
        }
    }

    const result = {};
    for (let i = 0; i < distances.length; i++) {
        result[i] = distances[i]; // Prepare the result object
    }

    return result; // Return distances from the root to all nodes
}

// Example weighted graph
const graph = [
    [0, 4, 0, 0],  // Vertex 0 is connected to Vertex 1 with weight 4
    [4, 0, 8, 0],  // V 1 is connected to V 0 (weight 4) & V 2 (weight 8)
    [0, 8, 0, 7],  // V 2 is connected to V 1 (weight 8) & V 3 (weight 7)
    [0, 0, 7, 0]   // Vertex 3 is connected to Vertex 2 with weight 7
];

console.log(dijkstra(graph, 0)); // Find shortest paths from Vertex 0
// Output : { '0': 0, '1': 4, '2': 12, '3': 19 }
