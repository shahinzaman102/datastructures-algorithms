// Delete a Node with One Child in a Binary Search Tree

var deleteNodesWithOneChild = function (root) {
    if (!root) return null;

    root.left = deleteNodesWithOneChild(root.left);
    root.right = deleteNodesWithOneChild(root.right);

    if (root.left === null && root.right !== null) {
        return root.right; // this descendent node will be returned to it's ancestor
    }
    if (root.right === null && root.left !== null) {
        return root.left; // this descendent node will be returned to it's ancestor
    }

    return root;
};
