'use strict';

class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}


class linkedList {
  constructor() {
    this.head === null;
  }
  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }
  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }
    
  find(item) {
    //from current head
    let currNode = this.head;
    //if the list is empty
    if (!this.head) {
      return null;
    }
    //check for the item your finding
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
    //if the node to be removed is the head(the one you want) make the next node the head
    if(this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    //start at the head 
    let currNode = this.head;
    // keep track of the previous node
    let previousNode = this.head;
      
    while ((currNode !== null) && (currNode.value !== item)) {
      // save the prior node
      previousNode = currNode;
      currNode = currNode.next; 
    }
    if (currNode === null) {
      console.log('Item was not found');
      return;
    }
    previousNode.next = currNode.next;
  }
}

function main() {
    
    
}