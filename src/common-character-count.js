const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const freq1 = new Map();
  const freq2 = new Map();
  
  for (let i = 0; i < s1.length; i++) {
    freq1.set(s1[i], (freq1.get(s1[i]) || 0) + 1);
  }
  
  for (let i = 0; i < s2.length; i++) {
    freq2.set(s2[i], (freq2.get(s2[i]) || 0) + 1);
  }
  
  let count = 0;
  
  for (let [char, freq] of freq1) {
    if (freq2.has(char)) {
      count += Math.min(freq, freq2.get(char));
    }
  }
  
  return count;
}

module.exports = {
  getCommonCharacterCount
};
