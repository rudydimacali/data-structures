var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var keys = Object.keys(storage);
    storage[keys.length] = value;
  };

  someInstance.dequeue = function() {
    var newStorage = Object.assign({}, storage);
    var keys = Object.keys(newStorage);
    var deleted = storage[0];
    delete storage[0];
    for (var i = 0; i < keys.length; i++) {
      storage[i] = newStorage[i+1];
    }
    delete storage[keys.length-1];
    return deleted;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
