const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  sampleActivity = typeof sampleActivity === 'string' ? parseFloat(sampleActivity) : false;
  if (sampleActivity > 0 && sampleActivity < 15) {
    const age = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD));
    return age;
  }
  return false;
};