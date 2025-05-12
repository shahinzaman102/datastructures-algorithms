/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
var longestZigZag = function (root) {
    let max = 0;

    let dfs = (node, last, length) => {
        if (!node) return;

        max = Math.max(max, length);

        dfs(node.left, 'l', last !== 'l' ? length + 1 : 1);
        dfs(node.right, 'r', last !== 'r' ? length + 1 : 1);
    }

    dfs(root, 'l', 0);
    return max;
};
