# Efficient Version:
# ------------------
# Find Shortest Path from Source to Destination in a Grid-Based City  or
# Find the shortest path in a grid from a source cell to a destination cell

from collections import deque

def shortest_path_bfs(grid, start, end):
    rows, cols = len(grid), len(grid[0])
    queue = deque([(start[0], start[1], 0)])
    visited = set()
    visited.add((start[0], start[1]))
    
    directions = [(0,1), (1,0), (-1,0), (0,-1)]

    while queue:
        x, y, dist = queue.popleft()
        if (x, y) == end:
            return dist

        for dx, dy in directions:
            nx, ny = x + dx, y + dy
            if (0 <= nx < rows and 0 <= ny < cols and 
                grid[nx][ny] == 0 and (nx, ny) not in visited):
                visited.add((nx, ny))
                queue.append((nx, ny, dist + 1))

    return -1  # path not found


# Example grid: 0 = free path, 1 = obstacle
grid = [
    [0, 0, 1],
    [1, 0, 0],
    [0, 0, 0]
]

# Take user input for start and end
print("Enter starting coordinates (row and column):")
start_x = int(input("Start row (0 to {}): ".format(len(grid) - 1)))
start_y = int(input("Start col (0 to {}): ".format(len(grid[0]) - 1)))

print("Enter destination coordinates (row and column):")
end_x = int(input("End row (0 to {}): ".format(len(grid) - 1)))
end_y = int(input("End col (0 to {}): ".format(len(grid[0]) - 1)))

start = (start_x, start_y)
end = (end_x, end_y)

# Run BFS
shortest_path = shortest_path_bfs(grid, start, end)

# Output result
if shortest_path == -1:
    print("No path found.")
else:
    print("Shortest path length (BFS):", shortest_path)
