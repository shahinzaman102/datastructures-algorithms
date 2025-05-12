/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var balanceBST = function (root) {
    // Step 1: Extract tree nodes into a sorted array using in-order traversal
    const arr = [];
    inOrderTraversal(root, arr);  // Get sorted values from the tree

    // Step 2: Build and return a balanced BST from the sorted array
    return sortedArrayToBST(arr);
};

// In-order traversal to get sorted values from the BST
function inOrderTraversal(root, arr) {
    if (!root) return;
    inOrderTraversal(root.left, arr);
    arr.push(root.val);  // Push values in sorted order
    inOrderTraversal(root.right, arr);
}

// Convert a sorted array into a balanced BST
function sortedArrayToBST(arr) {
    if (arr.length === 0) return null;

    const mid = Math.floor(arr.length / 2);
    const node = new TreeNode(arr[mid]);  // Root node at the middle

    node.left = sortedArrayToBST(arr.slice(0, mid));        // Recursively build left subtree
    node.right = sortedArrayToBST(arr.slice(mid + 1));      // Recursively build right subtree

    return node;
}
