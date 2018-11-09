

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var outerArray = this._storage.get(index);
  var innerArray = [k, v];
  
  // if we've never visited index, create an outer empty array there
  if (outerArray === undefined) {
    this._storage.set(index, []);
    outerArray = this._storage.get(index);
  }
  
  // check if k exists in one of the inner arrays
  if (this.retrieve(k) !== undefined) {
    // if it exists, remove it
    this.remove(k);
  }

  // push inner array to outer array at index of this._storage
  outerArray.push(innerArray);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var arrayAtIndex = this._storage.get(index);
  var numArrays = arrayAtIndex.length;
  for (var i = 0; i < numArrays; i++) {
    if (arrayAtIndex[i][0] === k) {
      return arrayAtIndex[i][1];
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var outerArray = this._storage.get(index);
  var indexToBeRemoved, result;
  for (var i = 0; i < outerArray.length; i++) {
    var innerArray = outerArray[i];
    if (innerArray[0] === k) {
      indexToBeRemoved = i;
      result = innerArray[1];
    }
  }
  
  // remove found innerArray from outerArray
  outerArray.splice(indexToBeRemoved, 1);
  
  return result;
  
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


