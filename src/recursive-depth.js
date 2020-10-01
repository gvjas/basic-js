const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth(array) {
    const n = 1;
    if (JSON.stringify(array) === JSON.stringify(array.flat(n))) {
      return n;
    }
    return 1 + this.calculateDepth(array.flat(n));
  }
};