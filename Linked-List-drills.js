'use strict';

class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}


class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }
  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }
  find(item) {
    //start at the head
    let currNode = this.head;
    //if the list is empty
    if (!this.head) {
      return null;
    }
    //Check for the item 
    while (currNode.value !== item) {
      //return null if end of the list 
      // and the item is not on the list
      if (currNode.next === null) {
        return null;
      }
      else {
        //otherwise keep looking 
        currNode = currNode.next;
      }
    }
    //found it
    return currNode;
  }
  remove(item) {
    //if the list is empty
    if (!this.head) {
      return null;
    }
    //if the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    //start at the head
    let currNode = this.head;
    //keep track of previous
    let prevNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      //save the previous node 
      prevNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    prevNode.next = currNode.next;
  }
  insertBefore(nextNode, item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let currNode = this.head;
      let prevNode = this.head;

      while ((currNode !== null) && (currNode.value !== nextNode)) {
        prevNode = currNode;
        currNode = currNode.next;
      }
      if (currNode === null) {
        console.log('Item not found on list');
        return;
      }
      prevNode.next = new _Node(item, currNode);

    }
  }

  insertAfter(prevNode, item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let currNode = this.head;
      let prevNode = this.head;

      while ((currNode !== null) && (currNode.value !== prevNode)) {
        //save the previous node 
        prevNode = currNode;
        currNode = currNode.next;
      }
      if (currNode !== null) {
        console.log('Item not found on list');
        return;
      }
      prevNode.next = new _Node(item, currNode);

    }
  }


}

function main() {
  let singlyList = new LinkedList();
  singlyList.insertFirst('Apollo');
  singlyList.insertFirst('Boomer');
  singlyList.insertFirst('Helo');
  singlyList.insertFirst('Husker');
  singlyList.insertFirst('Starbuck');
  singlyList.insertFirst('Tauhida');
  singlyList.remove('squirrel');
  singlyList.insertBefore('Apollo', 'John');
  singlyList.insertAfter('Apollo', 'Tom');
  console.log(JSON.stringify(singlyList));
}

main();