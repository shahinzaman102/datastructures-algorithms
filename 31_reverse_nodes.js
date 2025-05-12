/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var reverseEvenLengthGroups = function (head) {
    let prev = head; // Node immediately before the current group

    // The head doesn't need to be reversed since
    // it's a group of one node, so starts with length 2
    let groupLen = 2;

    while (prev.next != null) {
        let node = prev,
            numNodes = 0;
        for (let i = 0; i < groupLen; i++) {
            if (node.next == null) break;
            numNodes++;
            node = node.next;
        }
        if (numNodes % 2)
            // odd length
            prev = node;
        else {
            // even length
            let reverse = node.next;
            let curr = prev.next,
                currNext;
            for (let j = 0; j < numNodes; j++) {
                currNext = curr.next;
                curr.next = reverse;
                reverse = curr;
                curr = currNext;
            }
            // updating the prev pointer after reversal of the even group
            let prevNext = prev.next;
            prev.next = node;
            prev = prevNext;
        }
        // increment 1 by one and move to the next group
        groupLen++;
    }
    return head;
};
