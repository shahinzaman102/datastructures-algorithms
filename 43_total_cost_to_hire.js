/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
var totalCost = function (costs, k, candidates) {
    let ans = 0, l = 0, r = costs.length - 1, max = 1e5 + 1; // 100000 + 1 = 100001 --> This is a large value used to initialize the priority queues.
    const h1 = new MinPriorityQueue(), h2 = new MinPriorityQueue();
    // console.log(h1); // to find the structure of the heap
    h1.enqueue(max), h2.enqueue(max); // Insert (max possible elemets + 1) in both queue
    // using a single heap (h) insted of two (h1 & h2) is inefficient.
    // because :
    // all the elements would needed to be rehepified after each enqueue & dequeue
    // inside of the single heap (h) - which is more time consuming in single heap.
    for (let i = 0; i < k; ++i) {
        // Add elements until candidates size reached or both sides overlaps
        while (h1.size() <= candidates && l <= r) h1.enqueue(costs[l++]);
        // console.log(h1)
        // console.log('h1: ', h1._heap._nodes.map(node => node.key))
        while (h2.size() <= candidates && l <= r) h2.enqueue(costs[r--]);
        // console.log(h2)
        // console.log('h2: ', h2._heap._nodes.map(node => node.key))
        // Remove smallest element and add it to ans
        ans += (h1.front().element <= h2.front().element ? h1 : h2).dequeue().element;
    }

    return ans;
};
// The value 100001 (1e5 + 1) is used as a large "dummy" value to initialize the priority queues. It ensures that even if the queue is empty at the start, there is a default maximum value available for comparison. This prevents errors when comparing costs or dequeuing workers from potentially empty queues. After enqueuing actual workers, this large value gets replaced by real costs from the costs array.

// Here's why the large value is kept until the last:

// Ensures comparison: The large value (100001) acts as a safe fallback during comparisons. When enqueuing workers, if there are fewer workers left to process (due to overlapping from the left and right sides), the large value remains in the queue to avoid processing empty or smaller heaps.

// Avoids errors: If the queue runs out of real worker costs to compare (due to exhausting one side of the list), the large value prevents the queue from becoming empty, which would lead to errors when trying to dequeue or compare elements.

// Minimization logic: The large value never interferes with the selection of the minimum cost because it’s intentionally set higher than any possible worker cost in the costs array. Thus, it will never be selected as the minimum value when comparing elements from h1 and h2.
