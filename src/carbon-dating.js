const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  const x = parseFloat(sampleActivity)
  if (typeof sampleActivity === 'string' && x > 0 && x < 15) {
    const age = Math.ceil(Math.log(MODERN_ACTIVITY / x) / (0.693 / HALF_LIFE_PERIOD));
    return age;
  }
  return false;
};