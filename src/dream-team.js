const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (typeof members !== 'object' || members === null || members[0] === undefined) {
   return false;
  }
  return members
        .filter(x => typeof x === 'string' || typeof x === 'array')
        .map(x => x.trim())
        .map(x => x[0].toUpperCase())
        .sort()
        .join('')
};