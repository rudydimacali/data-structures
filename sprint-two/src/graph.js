

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var key in this.storage) {
    if (key === String(node)) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // remove associated edge from all other nodes
  var connectedNodes = this.storage[node];
  for (var i = 0; i < connectedNodes.length; i++) {
    var connectedNode = connectedNodes[i];
    var index = this.storage[connectedNode].indexOf(node);
    this.storage[connectedNode].splice(index, 1);
  }  
  
  // remove the node
  delete(this.storage[node]);
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return (this.storage[fromNode].includes(toNode) && 
          this.storage[toNode].includes(fromNode));
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.contains(Number(fromNode)) && this.contains(Number(toNode))) {
    if (fromNode !== toNode) {
      this.storage[fromNode].push(Number(toNode));
      this.storage[toNode].push(Number(fromNode));
    }   
  } else {
    return 'Node(s) not found.';
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  
  var storage = this.storage;
  
  var delEdge = function(node1, node2) {
    var index = storage[node1].indexOf(node2);
    if (index >= 0) {
      storage[node1].splice(index, 1);
    }
  };
  
  delEdge(fromNode, toNode);
  delEdge(toNode, fromNode);
  
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.storage) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


