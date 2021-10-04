import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
export default function transform( arr ) {
  let res = [];
  if (!Array.isArray(arr)) throw  new Error('\'arr\' parameter must be an instance of the Array!');
    else if (arr[0] == undefined) return arr;
  for (let i = 0; i < arr.length; i++) {
    if (
      (arr[i + 1] == '--discard-prev' && arr[i - 1] != '--double-next') ||
      arr[i - 1] == '--discard-next' ||
      arr[i] === '--discard-prev' ||
      arr[i] === '--discard-next' ||
      arr[i] === '--double-prev' ||
      arr[i] === '--double-next'
    )
      continue;
    if (arr[i - 1] == '--double-next' && arr[i + 1] == '--double-prev') {
      res.push(arr[i]);
      res.push(arr[i]);
      res.push(arr[i]);
    } else if (arr[i - 1] == '--double-next' && arr[i + 1] == '--discard-prev') {
      res.push(arr[i]);
    } else if (arr[i - 1] == '--double-next' || arr[i + 1] == '--double-prev') {
      res.push(arr[i]);
      res.push(arr[i]);
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}


/* if (typeof arr[i] == 'string') {
  switch (arr[i]) {
    case '--discard-prev' :
      if (arr[i-1] == undefined) {
        res.splice(i, 1);
        break;
      }
      else {
        res.splice(i - 1, 2);
        break;
      }
    case '--discard-next' :
      if (arr[i+1] == undefined) {
        res.splice(i, 1);
        break;
      }
      else  {
        res.splice(i, 2);
        break;
      }
    case '--double-next' :
      if (arr[i+1] == undefined){
        res.splice(i, 1);
        break;
      }
      else {
        res[i] = res[i+1];
        break;
      }
    case '--double-prev' :
      if (arr[i-1] == undefined) {
        res.splice(i, 1)
        break;
      }
      else
        res[i] = res[i+1];
        break;
    default:
      return arr;
  }
} */