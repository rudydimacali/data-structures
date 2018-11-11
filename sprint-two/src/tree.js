var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var node = Tree(value);
  this.children.push(node);
};

treeMethods.contains = function(target) {  
  if (this.value === target) {
    return true;
  }
  if (this.children.length) {
  // CHILDREN EXIST
    var results = _.map(this.children, function(child) {
      return child.contains(target);
    });
    return results.includes(true);
  } else {
  // NO CHILDREN EXIST
    return false;
  }
};

// Assumes only one instance of target
treeMethods.removeChild = function(target) {
  if (!this.contains(target)) {
    return 'Target not found.';
  }
  var childrenValues = _.map(this.children, function(childObject) {
    return childObject.value;
  });
  var index = childrenValues.indexOf(target);
  if (index >= 0) {
    this.children.splice(index, 1);
    return target;
  } else if (this.children.length > 0) {
    var result;
    for (var i = 0; i < this.children.length; i++) {
      result = this.children[i].removeChild(target);
      if (result === target) {
        return result;
      }
    }
  } 
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
// .contains would be a linear complexity function. O(n)
// .addChild would be a constant complexity function. O(1)