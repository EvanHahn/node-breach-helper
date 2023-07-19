const assert = require("node:assert");
const helper = require(".");

const REPEATS = 1000;

// Returns a comment with HTML inside
{
  for (let i = 0; i < REPEATS; i++) {
    assert(/^<!--\w+-->$/.test(helper()));
  }
}

// Returns variable-length data
{
  let collisions = 0;
  let lastLength;
  for (let i = 0; i < REPEATS; i++) {
    const length = helper().length;
    if (length === lastLength) collisions += 1;
    lastLength = length;
  }
  assert(collisions < REPEATS / 100);
}
