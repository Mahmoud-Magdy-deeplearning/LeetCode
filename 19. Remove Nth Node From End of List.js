function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (!head.next) return null;
  let current = head,
    previous = head,
    counter = 0,
    Remove;
  while (current.next) {
    current = current.next;
    counter++;
  }
  Remove = counter - n;
  console.log(Remove);
  counter = 0;
  while (counter < Remove) {
    previous = previous.next;
    counter++;
  }
  if (Remove < 0) {
    previous.val = previous.next.val;
    previous.next = previous.next.next;
  } else previous.next = previous.next.next;
  return head;
};
let head = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);
const n = 2;
console.log(removeNthFromEnd(head, n));

// Output: [1,2,3,5]
