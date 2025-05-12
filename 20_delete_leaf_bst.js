// Delete a Leaf Node (1st Node Last Node) in a BST

function delete1stLefNode(root) {
    if (!root) return null;

    root.left = delete1stLefNode(root.left);
    root.right = delete1stLefNode(root.right);

    if (!root.left && !root.right)
        return null; // return on (root.left) or (root.right) to any recursive instance for any node which comes first as Leaf

    return root;
}


function deleteLastLefNode(root) {
    if (!root) return null;

    root.right = delete1stLefNode(root.right);
    root.left = delete1stLefNode(root.left);

    if (!root.left && !root.right)
        return null; // return on (root.left) or (root.right) to any recursive instance for any node which comes first as Leaf

    return root;
}
