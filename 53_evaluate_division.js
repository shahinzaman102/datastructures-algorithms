/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
    // Step 1: Build the graph
    let graph = {};

    for (let i = 0; i < equations.length; i++) {
        let [numerator, denominator] = equations[i];
        let value = values[i];

        if (!graph[numerator]) graph[numerator] = {};
        if (!graph[denominator]) graph[denominator] = {};

        graph[numerator][denominator] = value;
        graph[denominator][numerator] = 1 / value;
    }

    // Step 2: Evaluate queries using BFS
    let evaluateQuery = (numerator, denominator) => {
        if (!(numerator in graph) || !(denominator in graph)) {
            return -1.0; // One of the variables does not exist in the graph
        }
        if (numerator === denominator) {
            return 1.0; // Dividing a number by itself
        }

        let queue = [[numerator, 1.0]]; // Start with the numerator and an initial product of 1
        let visited = new Set();
        visited.add(numerator);

        while (queue.length > 0) {
            let [current, product] = queue.shift(); // [a,1] - [b,2]

            // Explore all the neighbors of the current node
            let neighbors = graph[current];
            for (let neighbor in neighbors) {
                if (neighbor === denominator) { // return --> 2 * 3 = 6 
                    return product * neighbors[neighbor]; // Found the denominator
                }
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push([neighbor, product * neighbors[neighbor]]); // [b,2]
                }
            }
        }

        return -1.0; // If no valid path is found
    };

    // Step 3: Process each query
    let results = [];
    for (let query of queries) {
        let [numerator, denominator] = query;
        results.push(evaluateQuery(numerator, denominator));
    }

    return results;
};
