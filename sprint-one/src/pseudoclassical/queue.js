var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  var keys = Object.keys(this.storage);
  this.storage[keys.length] = value;
};

Queue.prototype.dequeue = function() {
  var newStorage = Object.assign({}, this.storage);
  var keys = Object.keys(newStorage);
  var deleted = this.storage[0];
  delete this.storage[0];
  for (var i = 0; i < keys.length; i++) {
    this.storage[i] = newStorage[i+1];
  }
  delete this.storage[keys.length-1];
  return deleted;
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};

