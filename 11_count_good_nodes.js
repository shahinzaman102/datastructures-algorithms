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
 * @return {number}
 */
var goodNodes = function (root) {
    let good = 0;
    function trav(node, max) {
        if (!node) return;
        if (node.val >= max) ++good;
        max = Math.max(max, node.val);
        trav(node.left, max);
        trav(node.right, max);
    }

    trav(root, root.val);

    return good;
};
