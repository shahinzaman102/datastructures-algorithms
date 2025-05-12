var displayTree = tree => console.log(JSON.stringify(tree, null, 2));

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function BinarySearchTree() {
    this.root = null;
    // Only change code below this line
    this.isPresent = function (value) {
        if (!this.root) return false;

        let curr = this.root;
        while (curr && curr.value !== value) {
            if (curr.value > value) {
                curr = curr.left;
            } else {
                curr = curr.right;
            }
        }
        return !!curr;
    }
    // Only change code above this line
}
