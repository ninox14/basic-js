import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  if(!Array.isArray(members)) return false;
  let letters = [];
  for (let name of members) {
    if (typeof name == 'string') {
      letters.push(name.trim().charAt(0).toUpperCase());
    }
  }
  return letters.sort().join('');
}


// console.log(createDreamTeam(3), false);
// console.log(createDreamTeam(3.312312), false);
// console.log(createDreamTeam(false), false);
// console.log(createDreamTeam(null), false);
// console.log(createDreamTeam(undefined), false);
// console.log(createDreamTeam({ 'foo': 'bar' }), false);