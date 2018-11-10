describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });
  
  it('should correctly identify intersection between two sets', function() {
    var set2 = Set();
    set.add('Mel Gibson');
    set.add('testOne');
    set.add('testThree');
    set2.add('Mel Gibson');
    set2.add('testThree');
    set2.add('notIntersecting');
    var setIntersection = set.intersection(set2);
    expect(setIntersection.contains('Mel Gibson')).to.equal(true);
    expect(setIntersection.contains('testThree')).to.equal(true);
    expect(setIntersection.contains('testOne')).to.equal(false);
    expect(setIntersection.contains('notIntersecting')).to.equal(false);
  });

});
