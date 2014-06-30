var expect = require('expect.js');
var helper = require('..');

describe('breach helper', function() {

  var REPEATS = 1000;

  it('returns an HTML comment with ASCII inside', function() {
    for (var i = 0; i < REPEATS; i ++) {
      expect(helper()).to.match(/^<!--\w+-->$/);
    }
  });

  it('returns variable-length data', function() {
    var collisions = 0;
    var lastLength;
    for (var i = 0; i < REPEATS; i ++) {
      var length = helper().length;
      if (length === lastLength)
        collisions += 1;
      lastLength = length;
    }
    expect(collisions).to.be.lessThan(REPEATS / 100);
  });

});
