"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const chooseRandom = exports.chooseRandom = (array = [], numItems) => {
  // TODO check that array length is greater than 1

  const getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  if (array.length < 2) {
    return array;
  }

  if (numItems > array.length) {
    numItems = getRandomInt(array.length - 1) + 1;
  }

  const randomIndices = Array(numItems) // TODO ensure numItems is within the range 1 to the length of the array
  .fill() // Don't change this line. Just fills the array we're about to reduce.
  .reduce((res, next) => {
    // reduce the array to contain numItems # of unique index values
    let r = array[getRandomInt(array.length) - 1];
    while (res.includes(r)) {
      r = array[getRandomInt(array.length) - 1];
    }
    res.push(r);
    return res;
  }, []);
  // TODO return a new array filtering the passed in array for only the
  // indices contained in the randomIndices array
  return Array.from(randomIndices.map(x => array[x - 1]));
};