// In JavaScript you can define the linked-list node type like this
class LinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null; // where next points to another LinkedListNode
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
}

// To create a linked list with single node containing value 1
const linkedList = new LinkedListNode(1)

// To add another node of value 2
linkedList.next = new LinkedListNode(2)

// An yet another node of value 3
linkedList.next.next = new LinkedListNode(3)

// Now take a look at the linked list
// console.log(linkedList)

// Try to implement the following functions that work on a linked list
// Make sure to check bound of the list

/**
 * Find the length of a linked list
 * @param {LinkedList} list - a linked list
 * @returns {integer} - the length of the list 
 */
function length(list) {
  // if (list == null) {
  //   return 0;
  // }
  // let i = 0;
  // let cur = list;
  // while (cur.next != null) {
  //   cur = cur.next;
  //   i++
  // }
  // return i;
  return list.size;
}

/**
 * Find the n-th element of a linked list
 * @param {LinkedList} list - a linked list
 * @param {integer} n - index of the element (0-based)
 * @returns {LinkedListNode} - a copy of n-th node
 */
function find(list, n) {
  // sanity check, i.e. check inputs
  if (n >= list.size || n < 0) {
    return null;
  }

  // handle special case
  if (list == null) return null

  // general cases
  let cur = list.head,
    i = 0;
  while(i < n) {
    cur = cur.next;
    i++;
  }
  // let cur, prev, i = 0;
  // cur = list.head;
  // prev = cur;
  // if (n === 0) {
  //   list.head = cur.next;
  // }
  // else {
  //   while (i < n) {
  //     i++;
  //     prev = cur;
  //     cur = cur.next;
  //   }
  // }
  return cur;
}

/**
 * Insert a value to the n-th node of a linked list
 * @param {LinkedList} list - a linked list
 * @param {integer} n - the index to insert to
 * @param {*} value - the value to be inserted
 */
function insert(list, n, value) {
  // sanity check
  if (list == null || n >= list.size || n < 0) {
    return false;
  }
  const node = new LinkedListNode(value);
  // let cur = list.head;
  // special case #1
  if (list.size === 1) {
    const temp = list.head;
    list.head = node;
    node.next = temp;
  } else {
    const prev = find(list, n-1);
    const temp = prev.next;
    prev.next = node;
    node.next = temp;
  }

  // var cur, prev;
  // cur = list.head;

  // if (n === 0) {
  //   node.next = head;
  //   list.head = node;
  // }
  // else {
  //   curr = list.head;
  //   var i = 0;
  //   while (i < n) {
  //     i++;
  //     prev = cur;
  //     cur = cur.next;
  //   }
  //   node.next = cur;
  //   prev.next = node;
  // }
  list.size++;
}

/**
 * 
 * @param {LinkedList} list 
 * @param {*} value 
 */
function add(list, value) {
  if (list == null) {
    return;
  }
  const node = new LinkedListNode(value);
  if (list.head == null) {
    // list = new LinkedList()
    list.head = node;
    list.size++;
    // console.log('adding...');
    return;
  }
  let end = find(list, list.size - 1);
  // if (end == null) {
  //   list.head = node;
  //   list.size++;
  //   return;
  // }
  end.next = node;
  list.size++; 
}

module.exports = {
  LinkedList,
  LinkedListNode,
  add,
  find,
  insert,
  add,
  length,
}