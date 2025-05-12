var displayTree = tree => console.log(JSON.stringify(tree, null, 2));

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function BinarySearchTree() {
    this.root = null;

    this.add = function (value) {
        const newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
            return undefined;
        }

        let curr = this.root;
        let parent = null;

        while (curr) {
            parent = curr;

            if (value === curr.value) {
                return null;
            } else if (value < curr.value) {
                curr = curr.left;
            } else {
                curr = curr.right;
            }
        }

        if (value < parent.value) {
            parent.left = newNode;
        } else {
            parent.right = newNode;
        }

        return undefined;
    };
}
