var MAX_SIZE = 2048;
var ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

var alphabetLength = ALPHABET.length;

function randomString() {
  var length = Math.ceil(Math.random() * MAX_SIZE);
  var result = "";
  for (var i = 0; i < length; i++) {
    result += ALPHABET[(Math.random() * alphabetLength) | 0]; // x | 0 == Math.floor(x)
  }
  return result;
}

module.exports = function () {
  return "<!--" + randomString() + "-->";
};
