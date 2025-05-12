var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function BinarySearchTree() {
    this.root = null;
}

function isBinarySearchTree(tree) {
    function isBinarySubTree(node) {
        if (!node) return true; // Empty subtree is valid

        // Check if left and right subtrees are valid and in the correct order
        const isLeftValid = !node.left || node.left.value < node.value;
        const isRightValid = !node.right || node.right.value >= node.value;

        return isLeftValid && isRightValid &&
            isBinarySubTree(node.left) && isBinarySubTree(node.right);
    }

    return isBinarySubTree(tree.root);
}
