describe('doublyLinkedList', function() {
  var dll;

  beforeEach(function() {
    dll = new DoublyLinkedList();
  });

  it('should have a head and tail', function() {
    expect(dll).to.have.property ('head');
    expect(dll).to.have.property('tail');
  });

  it('should have methods named "addToHead", "removeHead", addToTail", "removeTail", and "contains"', function() {
    expect(dll.addToHead).to.be.a('function');
    expect(dll.removeHead).to.be.a('function');
    expect(dll.addToTail).to.be.a('function');
    expect(dll.removeTail).to.be.a('function');
    expect(dll.contains).to.be.a('function');
  });
  
  // ADDTOHEAD
  it('should designate a new head when new nodes are added to the head', function() {
    dll.addToHead(3);
    expect(dll.head.value).to.equal(3);
    expect(dll.tail.value).to.equal(3);
    dll.addToHead(1);
    expect(dll.head.value).to.equal(1);
    expect(dll.tail.value).to.equal(3);
    expect(dll.head.next.value).to.equal(3);
    expect(dll.tail.prev.value).to.equal(1);
  });

  // ADDTOTAIL
  it('should designate a new tail when new nodes are added to the tail', function() {
    dll.addToTail(4);
    expect(dll.tail.value).to.equal(4);
    dll.addToTail(5);
    expect(dll.tail.value).to.equal(5);
    expect(dll.tail.prev.value).to.equal(4);
    expect(dll.tail.prev.next.value).to.equal(5);
  });

  // REMOVEHEAD
  it('should remove the head from the list when removeHead is called', function() {
    dll.addToTail(4);
    dll.addToTail(5);
    expect(dll.head.value).to.equal(4);
    expect(dll.head.prev).to.equal(null);
    dll.removeHead();
    expect(dll.head.value).to.equal(5);
    dll.removeHead();
    expect(dll.removeHead()).to.equal('No head found.');
  });
  
  it('should return the value of the former head when removeHead is called', function() {
    dll.addToTail(4);
    expect(dll.removeHead()).to.equal(4);
  });
  
  // REMOVETAIL
  it('should remove the tail from the list when removeTail is called', function() {
    dll.addToHead(4);
    dll.addToHead(5);
    dll.removeTail();
    expect(dll.tail.value).to.equal(5);
    dll.removeTail();
    expect(dll.tail).to.equal(null);
    expect(dll.removeTail()).to.equal('No tail found.');
  });
  
  it('should return the value of the former tail when removeTail is called', function() {
    dll.addToTail(4);
    expect(dll.removeTail()).to.equal(4);
  });

  // CONTAINS
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
    expect(result).to.equal('No head found.');
    result = dll.removeTail();
    expect(result).to.equal('No tail found.');
  });

  // add more tests here to test the functionality of dll
});
