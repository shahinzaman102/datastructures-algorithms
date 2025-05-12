/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
function canVisitAllRooms(rooms) {
    // const visited = new Array(rooms.length).fill(false);
    const visited = new Set();

    const dfs = (index) => {
        // visited[index] = true;
        visited.add(index);
        for (const key of rooms[index]) {
            // if (!visited[key]) dfs(key);
            if (!visited.has(key)) dfs(key);
        }
    };

    dfs(0);

    // return visited.every(room => room);
    return visited.size === rooms.length;
}
