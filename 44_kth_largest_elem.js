/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {

    function swap(arr, x, y) {
        [arr[x], arr[y]] = [arr[y], arr[x]];
    }

    // we could also named partition as --> threeWayPartition
    const partition = (leftIdx, rightIdx) => {
        const pivotIdx = leftIdx + Math.floor(Math.random() * (rightIdx - leftIdx + 1));
        const pivotElem = nums[pivotIdx];

        let less = leftIdx;
        let equal = leftIdx;
        let greater = rightIdx;

        while (equal <= greater) {
            if (nums[equal] < pivotElem) {
                swap(nums, less, equal);
                less++;
                equal++;
            } else if (nums[equal] > pivotElem) {
                swap(nums, greater, equal);
                greater--;
            } else {
                equal++;
            }
        }

        return { less, greater };
    };

    let leftIdx = 0, rightIdx = nums.length - 1;
    const target = nums.length - k;
    // const target = k - 1;  // Change this line to find the Kth smallest element

    while (true) {
        const { less, greater } = partition(leftIdx, rightIdx);
        if (target >= less && target <= greater) {
            return nums[target];
        } else if (target < less) {
            rightIdx = less - 1;
        } else {
            leftIdx = greater + 1;
        }
    }
};
