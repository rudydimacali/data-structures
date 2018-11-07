class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  push(value) {
    var keys = Object.keys(this.storage);
    this.storage[keys.length] = value;
  }

  pop() {
    var keys = Object.keys(this.storage);
    var deleted = this.storage[keys[keys.length-1]];
    delete this.storage[keys[keys.length-1]];
    return deleted;
  }

  size() {
    var keys = Object.keys(this.storage);
    return keys.length;
  }
}