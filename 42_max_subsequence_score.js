/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function (nums1, nums2, k) {

    let result = 0;
    let totalSum = 0;
    let heap = new MinPriorityQueue({ priority: (element) => element })
    // console.log(heap) --> 
    // MinPriorityQueue {
    //     _priority: [Function: priority],
    //         _heap: MinHeap { _nodes: [], _leaf: null }
    // }

    // const merged = nums1.map((nums1Val, i) => [nums2[i], nums1Val])
    // const merged = nums1.map((_, i) => [nums2[i], nums1[i]]);
    const merged = [];
    for (let i = 0; i < nums1.length; i++) {
        merged.push([nums2[i], nums1[i]]);
    }
    // console.log(merged)
    // [ [ 2, 1 ], [ 1, 3 ], [ 3, 3 ], [ 4, 2 ] ]
    // [ [ 7, 4 ], [ 5, 2 ], [ 10, 3 ], [ 9, 1 ], [ 6, 1 ] ]
    merged.sort((a, b) => b[0] - a[0])
    // console.log(merged)
    // [ [ 4, 2 ], [ 3, 3 ], [ 2, 1 ], [ 1, 3 ] ]
    // [ [ 10, 3 ], [ 9, 1 ], [ 7, 4 ], [ 6, 1 ], [ 5, 2 ] ]

    for (const [maxOf2, num1Val] of merged) {
        if (heap.size() === k) {
            totalSum -= heap.dequeue().element
        }

        totalSum += num1Val
        heap.enqueue(num1Val)

        if (heap.size() === k) {
            result = Math.max(result, totalSum * maxOf2)
        }
    }

    return result
};
