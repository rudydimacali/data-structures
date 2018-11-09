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

BSTMethods.contains = function() {
  
};

BSTMethods.depthFirstLog = function() {
  
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
