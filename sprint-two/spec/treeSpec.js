describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });
  
  it('should remove and return a value in a tree of unique values', function() {
    tree.addChild(5);
    expect(tree.removeChild(5)).to.equal(5);
    expect(tree.contains(5)).to.equal(false);
    expect(tree.removeChild(6)).to.equal('Target not found.');
  
    var tree1 = Tree();
    tree1.addChild(5);
    tree1.children[0].addChild(4);
    expect(tree1.removeChild(4)).to.equal(4);
    expect(tree1.contains(4)).to.be.false;
    
    var tree2 = Tree();
    tree2.addChild(4);
    tree2.addChild(5);
    tree2.children[0].addChild(6);
    tree2.children[1].addChild(7);
    expect(tree2.removeChild(7)).to.equal(7);
    expect(tree2.contains(7)).to.equal(false);
  });

});
