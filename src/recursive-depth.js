const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      return 0;
    }

    let depth = 1;
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      if (Array.isArray(item)) {
        const itemDepth = this.calculateDepth(item) + 1;
        depth = Math.max(depth, itemDepth);
      }
    }
    return depth;
  }
}

module.exports = {
  DepthCalculator
};
