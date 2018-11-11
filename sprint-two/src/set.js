var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this._storage.includes(item)) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  return (this._storage.includes(item));
};

setPrototype.remove = function(item) {
  var index = this._storage.indexOf(item);
  if (index >= 0) {
    this._storage.splice(index, 1);
  }
};

// Accepts one set, and returns a set representing the intersection 
// with the calling set
setPrototype.intersection = function(secondSet) {
  var intersectionSet = Set();
  var storage = this._storage;
  for (var i = 0; i < storage.length; i++) {
    if (secondSet.contains(storage[i])) {
      intersectionSet.add(storage[i]);
    }
  }
  return intersectionSet;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
