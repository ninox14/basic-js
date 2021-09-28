import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity) {
  if (isNaN(sampleActivity) || !sampleActivity || +sampleActivity <= 0 || typeof sampleActivity == 'number' || +sampleActivity > 15 || typeof sampleActivity == 'object')  {
    return false;
  } else return  Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / (Math.log(2) / HALF_LIFE_PERIOD));
}
// console.log(dateSample(3), false);
// console.log(dateSample(3.312312), false);
// console.log(dateSample(false), false);
// console.log(dateSample(null), false);
// console.log(dateSample(undefined), false);
// console.log(dateSample([3]), false);
// console.log(dateSample(['3']), false);
// console.log(dateSample({ '3.14': '3dec' }), false)