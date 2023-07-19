const MAX_SIZE = 2048;
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

const alphabetLength = ALPHABET.length;

function randomString() {
  const length = Math.ceil(Math.random() * MAX_SIZE);
  let result = "";
  for (let i = 0; i < length; i++) {
    result += ALPHABET[(Math.random() * alphabetLength) | 0]; // x | 0 == Math.floor(x)
  }
  return result;
}

module.exports = function () {
  return "<!--" + randomString() + "-->";
};
