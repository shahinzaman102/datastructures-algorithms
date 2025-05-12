/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
    const visited = new Set();
    let province = 0;

    for (let i = 0; i < isConnected.length; i++) {
        if (!visited.has(i)) {
            dfs(i);
            province++;
        }// those which are connected are travered below by
        // the recursion & dfs - and those all together will satisfy this condition 
        // once thus province 1 for the connected group of cities --- and then 
        // not connected will satisfy this condition each at once individually.
        // so, all connected 1 + number of not connected individuals === province++;
    }

    return province;

    function dfs(i) {
        for (let j = 0; j < isConnected.length; j++) {
            if (isConnected[i][j] === 1 && !visited.has(j)) {
                visited.add(j);
                dfs(j);
            }
        }
    }
}
