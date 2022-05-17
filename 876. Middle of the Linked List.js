function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * Definition for singly-linked list.
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  if (!head.next) return head;
  let previousMove = 0;
  let counter = 1,
    current = head;
  middle = head;
  while (current.next) {
    current = current.next;
    counter++;
    if (counter / 2 - previousMove >= 1) {
      previousMove++;
      middle = middle.next;
    }
  }
  return middle;
};
let head = new ListNode(
  1,
  new ListNode(
    2,
    new ListNode(3, new ListNode(4, new ListNode(4, new ListNode(4))))
  )
);

console.log(middleNode(head));

// Output: [3,4,5]
