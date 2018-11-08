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
  // CHILDREN EXIST
  if (this.children.length) {
    var results = _.map(this.children, function(child) {
      if(child.contains(target)) {
        return true;
      } else {
        return false;
      }
    });
    return results.includes(true);
  }
  // NO CHILDREN EXIST
  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
// .contains would be a linear complexity function. O(n)
// .addChild would be a constant complexity function. O(1)