/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
    // intervals : [[1,100],[11,22],[1,11],[2,12]]
    // intervals : [[0,1],[3,4],[1,2]]
    intervals.sort((a, b) => a[1] - b[1]); // sort by earliest finish time
    // sorted : [[1,11],[2,12],[11,22],[1,100]]
    // sorted : [[0,1],[1,2],[3,4]]
    let prev = intervals[0], remove = 0;

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < prev[1]) remove++;
        else prev = intervals[i];
    }
    return remove; // 2
};
