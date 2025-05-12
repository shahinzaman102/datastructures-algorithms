function LinkedList() {
    let head = null;
    let length = 0;

    function Node(element) {
        this.element = element;
        this.next = null;
    };

    this.size = function () {
        return length;
    };

    this.head = function () {
        return head;
    };

    this.add = function (element) {
        let node = new Node(element);
        if (head === null) {
            head = node;
        } else {
            let currentNode = head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        length++;
    };

    // Only change code below this line
    this.removeAt = function (index) {
        // Exit early on bad input
        if (index < 0 || index >= length) {
            return null;
        }

        // Find deleted node and remove
        let deletedNode = head;
        if (index == 0) {
            head = null;
        } else {
            let currentNode = head;
            let currentIndex = 0;
            while (currentIndex < index - 1) {
                currentNode = currentNode.next;
                currentIndex++;
            }
            deletedNode = currentNode.next;
            currentNode.next = deletedNode.next;
        }

        // Update and return
        length--;
        return deletedNode.element;
    }
    // Only change code above this line
}
