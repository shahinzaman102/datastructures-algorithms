/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    return quickSort(nums);
};

function swap(arr, x, y) {
    [arr[x], arr[y]] = [arr[y], arr[x]];
}

// 3-way partitioning function for QuickSort
function partition(arr, leftIdx, rightIdx) {
    const pivotIdx = leftIdx + Math.floor(Math.random() * (rightIdx - leftIdx + 1));
    const pivotElem = arr[pivotIdx];

    swap(arr, pivotIdx, rightIdx); // Move pivot to end
    let less = leftIdx;
    let equal = leftIdx;
    let greater = rightIdx - 1;

    while (equal <= greater) {
        if (arr[equal] < pivotElem) {
            swap(arr, less, equal);
            less++;
            equal++;
        } else if (arr[equal] > pivotElem) {
            swap(arr, equal, greater);
            greater--;
        } else {
            equal++;
        }
    }

    swap(arr, equal, rightIdx); // Move pivot to its final place

    return { less, greater: equal };
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        const { less, greater } = partition(arr, left, right);

        quickSort(arr, left, less - 1);
        quickSort(arr, greater + 1, right);
    }
    return arr;
}
