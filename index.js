/* 

    Singly Linked List

    Important features:

    - Linked List contains a link element called first (head).

    - Each link carries a data field(s) and a link field called next.

    - Each link is linked with its next link using its next link.

    - Last link carries a link as null to mark the end of the list.

    Anatomy:

    There are two "buckets" in one node

    1. The data

    2. The address of the next node of the list

    Traversals in one direction.

*/

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  insertionStart(data) {
    let insertionNode = new Node(data);
    if (this.head === null) {
      // make new node head
      this.head = insertionNode;
    } else {
      // point new node to the head so it keeps the link to the other nodes.
      insertionNode.next = this.head;

      // make new node head
      this.head = insertionNode;
    }
  }

  insertionMiddle(data) {
    let insertionNode = new Node(data);

    if (this.head === null) {
      this.head = insertionNode;
    }

    let fastNode = this.head;
    let slowNode = this.head;

    /* we check if hareNode.next exists bc if it's the last item hareNode.next will be null or falsy.

    otherwise, we are trying to access something that doesn't exist.
    */
    while (fastNode !== null && fastNode.next !== null) {
      slowNode = slowNode.next;
      fastNode = fastNode.next.next;
    }

    insertionNode.next = slowNode.next;
    slowNode.next = insertionNode;
  }

  insertionEnd(data) {
    let insertionNode = new Node(data);

    if (this.head === null) {
      this.head = insertionNode;
      return;
    }

    let slowNode = this.head;
    while (slowNode.next !== null) {
      slowNode = slowNode.next;
    }

    slowNode.next = insertionNode;
  }

  deletionStart() {
    if (this.head === null) {
      console.log("nothing to delete");
      return;
    }

    this.head = this.head.next;
  }

  deletionMiddle() {
    if (this.head === null) {
      console.log("list is empty");
      return;
    }

    let current = this.head;
    let temp = this.head;
    let length = 0;

    while (current !== null) {
      length++;
      current = current.next;
    }

    if (length === 1) {
      this.head = null;
    } else if (length === 2) {
      this.head.next = null;
    }

    let midpoint = length / 2;
    length = 0;
    current = this.head;
    console.log("midpoint: ", midpoint);

    while (length !== midpoint - 1) {
      length++;
      current = temp;
      temp = temp.next;
    }

    current.next = temp.next;

    console.log("TEMP: ", temp);
    console.log("CURRENT: ", current);
  }

  deletionEnd() {
    if (this.head === null) {
      console.log("list is empty");
      return;
    }

    if (this.head.next === null) {
      this.head = null;
      return;
    }

    let current = this.head;

    while (current.next.next !== null) {
      current = current.next;
    }

    current.next = null;
  }

  display() {
    let currentNode = this.head;
    let output = "";
    while (currentNode !== null) {
      output += currentNode.data + " ";
      currentNode = currentNode.next;
    }
    console.log(output);
  }

  clear() {
    this.head = null;
  }

  size() {
    if (this.head === null) return 0;

    let current = this.head;
    let length = 0;

    while (current !== null) {
      length++;
      current = current.next;
    }

    return length;
  }

  search(data) {
    if (this.head === null) {
      console.log("list is empty");
      return;
    }

    let current = this.head;
    let length = 0;

    while (current !== null) {
      if (current.data === data) {
        console.log(`Found the data in index ${length}`);
        return;
      }

      length++;
      current = current.next;
    }

    console.log("Data not found in the list.");
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// linked list that has 3 items of numbers

let firstNode = new Node(1);
let secondNode = new Node(2);
let thirdNode = new Node(3);
let fourthNode = new Node(4);
let fifthNode = new Node(5);

firstNode.next = secondNode;
secondNode.next = thirdNode;
thirdNode.next = fourthNode;
fourthNode.next = fifthNode;
fifthNode.next = null;

let myLinkedList = new LinkedList(firstNode);

myLinkedList.insertionMiddle("inserted in middle!");

myLinkedList.deletionMiddle();
myLinkedList.display();
myLinkedList.insertionEnd(10);
myLinkedList.display();
myLinkedList.deletionStart();
myLinkedList.display();
myLinkedList.insertionEnd(12);
myLinkedList.display();
myLinkedList.deletionEnd();
myLinkedList.display();
console.log(`The size of my linked list is: ${myLinkedList.size()}`);
myLinkedList.search(10);
