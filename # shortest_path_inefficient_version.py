def shortest_path_brute_force(grid, x, y, dest_x, dest_y, visited):
    rows, cols = len(grid), len(grid[0])
    if x < 0 or y < 0 or x >= rows or y >= cols:
        return float('infinity')
    if grid[x][y] == 1 or visited[x][y]:
        return float('infinity')
    if (x, y) == (dest_x, dest_y):
        return 0

    visited[x][y] = True
    path_lengths = [
        shortest_path_brute_force(grid, x+1, y, dest_x, dest_y, visited),
        shortest_path_brute_force(grid, x-1, y, dest_x, dest_y, visited),
        shortest_path_brute_force(grid, x, y+1, dest_x, dest_y, visited),
        shortest_path_brute_force(grid, x, y-1, dest_x, dest_y, visited)
    ]
    visited[x][y] = False
    return 1 + min(path_lengths)


# Example grid: 0 = free path, 1 = obstacle
grid = [
    [0, 0, 1],
    [1, 0, 0],
    [0, 0, 0]
]

# Get input from user
print("Enter starting coordinates (row and column):")
start_x = int(input("Start row (0 to {}): ".format(len(grid)-1)))
start_y = int(input("Start col (0 to {}): ".format(len(grid[0])-1)))

print("Enter destination coordinates (row and column):")
dest_x = int(input("Dest row (0 to {}): ".format(len(grid)-1)))
dest_y = int(input("Dest col (0 to {}): ".format(len(grid[0])-1)))

# Create visited matrix
visited = []
for _ in range(len(grid)):          # For each row
    row = [False] * len(grid[0])    # Make a row of 'False's, one for each column
    visited.append(row)             # Add the row to the visited list

# Call the function
shortest_path = shortest_path_brute_force(grid, start_x, start_y, dest_x, dest_y, visited)

# Print result
if shortest_path == float('infinity'):
    print("No path found.")
else:
    print("Shortest path length:", shortest_path)
