// In JavaScript you can define the linked-list node type like this
class LinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null; // where next points to another LinkedListNode
  }
}

// To create a linked list with single node containing value 1
const linkedList = new LinkedListNode(1)

// To add another node of value 2
linkedList.next = new LinkedListNode(2)

// An yet another node of value 3
linkedList.next.next = new LinkedListNode(3)

// Now take a look at the linked list
console.log(linkedList)

// Try to implement the following functions that work on a linked list
// Make sure to check bound of the list

/**
 * Find the length of a linked list
 * @param {LinkedList} list - a linked list
 * @returns {integer} - the length of the list 
 */
function length(list) {

}

/**
 * Find the n-th element of a linked list
 * @param {LinkedList} list - a linked list
 * @param {integer} n - index of the element (0-based)
 * @returns {LinkedListNode} - a copy of n-th node
 */
function find(list, n) {

}

/**
 * Insert a value to the n-th node of a linked list
 * @param {LinkedList} list - a linked list
 * @param {integer} n - the index to insert to
 * @param {*} value - the value to be inserted
 */
function insert(list, n, value) {

}
