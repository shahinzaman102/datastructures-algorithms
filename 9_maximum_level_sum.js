/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
var maxLevelSum = function (root) {
    const sums = [];

    const traverse = (node, depth) => {
        if (!node) return;

        sums[depth] = (sums[depth] ?? 0) + node.val;

        traverse(node.left, depth + 1);
        traverse(node.right, depth + 1);
    }

    traverse(root, 0);
    // console.log(sums)
    return sums.findIndex((el) => el === Math.max(...sums)) + 1;  // 1+1
};
