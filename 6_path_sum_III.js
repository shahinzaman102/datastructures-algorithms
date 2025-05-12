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
 * @param {number} targetSum
 * @return {number}
 */
// const pathSum = (root, targetSum) => {
//     let output = 0, map = {};
//     const traverse = (root, pathSum) => {
//         if (!root) return;
//         pathSum += root.val;

//         if (pathSum === targetSum) output++; 

//         if (map[pathSum - targetSum]) output += map[pathSum - targetSum];

//         if (map[pathSum])
//             map[pathSum]++; 
//         else
//             map[pathSum] = 1;

//         traverse(root.left, pathSum);
//         traverse(root.right, pathSum);
//         map[pathSum]--;
//     };
//     traverse(root, 0);
//     return output;
// };

// at here ---> map[pathSum]++; 
// for [2, 3, 3] targetSum = 8 now, for 1st two pathSum (2+3)=5, 
// which is less than targetSum which is why here -- no output++

const pathSum = (root, targetSum) => {
    let output = 0;
    let map = new Map(); // Map() instead of {}
    const traverse = (root, pathSum) => {
        if (!root) return;
        pathSum += root.val;

        if (pathSum === targetSum) output++;

        if (map.has(pathSum - targetSum)) output += map.get(pathSum - targetSum);

        if (map.has(pathSum))
            map.set(pathSum, map.get(pathSum) + 1); // ++ (not + 1) - which why not just : map.get(pathSum) + 1
        else
            map.set(pathSum, 1);

        traverse(root.left, pathSum);
        traverse(root.right, pathSum);
        map.set(pathSum, map.get(pathSum) - 1); // -- (not - 1) - which why not just : map.get(pathSum) - 1
    };
    traverse(root, 0);
    return output;
};
