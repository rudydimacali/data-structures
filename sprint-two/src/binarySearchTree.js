var BinarySearchTree = function(value) {
  var binarySearchTree = Object.create(BSTMethods);
  binarySearchTree.value = value;
  binarySearchTree.left = null;
  binarySearchTree.right = null;
  return binarySearchTree;
};

var BSTMethods = {};

BSTMethods.insert = function(value) {
  var newBST = BinarySearchTree(value);
  if (value < this.value) {
    if (this.left === null) {
      this.left = newBST;
    } else {
      this.left.insert(value);
    }
  } else if (value > this.value) {
    if (this.right === null) {
      this.right = newBST;
    } else {
      this.right.insert(value);
    }
  }
};

BSTMethods.contains = function(value) {
  if (this.value === value) {
    return true;
  } else if (value < this.value && this.left !== null) {
    return this.left.contains(value);
  } else if (value > this.value && this.right !== null) {
    return this.right.contains(value);
  } else {
    return false;
  }
};

BSTMethods.depthFirstLog = function(callback) {
  callback(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(callback);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(callback);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
