const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let number = 0;
  for (item of backyard) {
    number += item.filter(x => x === "^^").length;
  }
  return number;
  }


