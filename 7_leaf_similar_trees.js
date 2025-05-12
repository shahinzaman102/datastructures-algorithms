/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
    let arr1 = [], arr2 = [];

    let dfsTraverse = (node, arr) => {
        if (!node) return;
        if (!node.left && !node.right)
            arr.push(node.val);
        dfsTraverse(node.left, arr);
        dfsTraverse(node.right, arr);
    }
    dfsTraverse(root1, arr1);
    dfsTraverse(root2, arr2);

    return (JSON.stringify(arr1) === JSON.stringify(arr2));
};
