var assert = require("assert");
var helper = require(".");

var REPEATS = 1000;
var i;

// Returns a comment with HTML inside
{
  for (i = 0; i < REPEATS; i++) {
    assert(/^<!--\w+-->$/.test(helper()));
  }
}

// Returns variable-length data
{
  var collisions = 0;
  var lastLength;
  for (i = 0; i < REPEATS; i++) {
    var length = helper().length;
    if (length === lastLength) collisions += 1;
    lastLength = length;
  }
  assert(collisions < REPEATS / 100);
}
