'use strict';

const _ = require('lodash');

/**
 * Get sum of squares for i times
 *
 * @param s, Number , Solution to test
 * @param i, Integer, Iteration to expand
 *
 * @return Number
 */
const costFx = (s, i) => ( (Math.pow(s, 2))*i );

/**
 * Get random candidate from search space
 *
 * @param searchSpace, Array , List of numbers to test
 *
 * @return Number, an element from searchSpace selected randomly
 */
const getRandomCandidate = (searchSpace) => (
  searchSpace[_.random(searchSpace.length - 1)]
);


/**
 * Search in defined space for `maxRepeat` times
 *
 * @param searchSpace, Array , List of numbers to test
 * @param i, Integer, Iteration to expand
 * @param expandRation, Integer, Expand the cost function
 *
 * @return Number
 */
const search = (searchSpace, maxRepeat, expandRation) => {
  let best = null, current = null;

  expandRation = expandRation || 1;

  for (let i = 0; i < maxRepeat; i++) {
    current = getRandomCandidate(searchSpace);
    if (costFx(current, expandRation) > costFx(best, expandRation)) {
      best = current;
    }
  }
  return best;
};

module.exports.run = () => {

  console.log(' ::::: Preparing Search Space :::: ');
  //generate search space
  let searchSpace = [];
  for(let i = -5.0; i <= 5.0; i = i + 0.0000050){
    searchSpace.push( parseFloat(i.toFixed(7)) );
  }

  // randomize search space
  searchSpace = _.shuffle(searchSpace);

  //define problem ranges
  let maxIteration = 100, expandRation = 2;

  console.log('');
  console.log(' ::::: Running Random Search :::: ');
  console.log('maxIteration : ' + maxIteration + ', costExpansion : ' + expandRation);
  console.log('Search space have ' + searchSpace.length + ' elements');


  let result = search(searchSpace, maxIteration, expandRation);
  console.log('');
  console.log(' ::::: Finished Random Search :::: ');
  console.log('Solution found ' + result + ' with cost : ' + costFx(result, expandRation) + ' in ' + maxIteration + ' tries.');
  console.log('Best solution possible is 5 / -5 with cost : 50');
};

module.exports.run();
