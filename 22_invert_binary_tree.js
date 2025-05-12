var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function BinarySearchTree() {
    this.root = null;
    // Only change code below this line
    this.invert = function (node = this.root) {
        if (!node) return null;

        [node.left, node.right] = [node.right, node.left];
        this.invert(node.left);
        this.invert(node.right);
    }
    // Only change code above this line
}
