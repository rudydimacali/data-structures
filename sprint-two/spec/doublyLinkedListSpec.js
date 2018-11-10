describe('doublyLinkedList', function() {
  var dll;

  beforeEach(function() {
    dll = doublyLinkedList();
  });

  it('should have a head and tail', function() {
    expect(dll).to.have.property('head');
    expect(dll).to.have.property('tail');
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(dll.addToTail).to.be.a('function');
    expect(dll.removeHead).to.be.a('function');
    expect(dll.contains).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    dll.addToTail(4);
    expect(dll.tail.value).to.equal(4);
    dll.addToTail(5);
    expect(dll.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    dll.addToTail(4);
    dll.addToTail(5);
    expect(dll.head.value).to.equal(4);
    dll.removeHead();
    expect(dll.head.value).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    dll.addToTail(4);
    expect(dll.removeHead()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    dll.addToTail(4);
    dll.addToTail(5);
    expect(dll.contains(4)).to.equal(true);
    expect(dll.contains(5)).to.equal(true);
    expect(dll.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    dll.addToTail(4);
    dll.addToTail(5);
    dll.removeHead();
    expect(dll.contains(4)).to.equal(false);
  });
  
  it('should not error when removing from an empty list', function() {
    var result = dll.removeHead();
    expect(result).to.equal('Cannot remove from an empty list');
  });

  // add more tests here to test the functionality of dll
});
