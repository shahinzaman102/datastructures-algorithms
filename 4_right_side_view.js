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
 * @return {number[]}
 */
var rightSideView = function (root) {
    if (!root) return [];
    let res = [];

    // ----- root-left-right (preorder) --> for right side view -----

    function pre(node, h) {
        if (!node) return;
        res[h] = node.val;
        pre(node.left, h + 1);
        pre(node.right, h + 1);
    }
    pre(root, 0);

    return res;
};

// var rightSideView = function (root) {
//     if (!root) return [];
//     let res = [];

//     //------ root-right-left --> for left side view ------

//     function leftView(node, h) {
//         if (!node) return;
//         res[h] = node.val;
//         leftView(node.right, h + 1);
//         leftView(node.left, h + 1);
//     }
//     leftView(root, 0);

//     return res;
// };
