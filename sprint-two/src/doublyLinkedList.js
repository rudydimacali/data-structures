var DoublyLinkedList = function() {
  // var dll = Object.create(dllMethods);
  this.head = null;
  this.tail = null;
  // return dll;
};

DoublyLinkedList.prototype.addToHead = function(value) {
  var node = Node(value);
  if (this.head === null) {
    this.head = node;
    this.tail = node;
  } else {
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }
};

DoublyLinkedList.prototype.removeHead = function() {
  if (this.head !== null) {
    var result = this.head.value;
    if (this.head.next !== null) {
      this.head.next.prev = null;         
    }
    this.head = this.head.next;
    return result;
  } else {
    return 'No head found.';
  }
};

DoublyLinkedList.prototype.addToTail = function(value) {
  var node = Node(value);
  if (this.tail === null) {
    this.tail = node;
    this.head = node;
  } else {
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }
};

DoublyLinkedList.prototype.removeTail = function() {
  if (this.tail !== null) {
    var result = this.tail.value;
    if (this.tail.prev !== null) {
      this.tail.prev.next = null;
    }
    this.tail = this.tail.prev;
    return result;
  } else {
    return 'No tail found.';
  }
};

DoublyLinkedList.prototype.contains = function(target) {
  var currentNode = this.head;
  while (currentNode !== null) {
    if (currentNode.value === target) {
      return true;
    }
    currentNode = currentNode.next;
  }
  return false;
};
  
var Node = function(value) {
  var node = {};

  node.value = value;
  node.prev = null;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
