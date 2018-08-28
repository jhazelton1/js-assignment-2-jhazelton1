'use strict';

var _jsverify = require('jsverify');

var _jsverify2 = _interopRequireDefault(_jsverify);

var _lib = require('./lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('chooseRandom', () => {
  it('Should return an array', () => {
    _jsverify2.default.assertForall('array nat', arr => {
      return Array.isArray((0, _lib.chooseRandom)(arr));
    });
  });
  it('Should not mutate the array', () => {
    _jsverify2.default.assertForall('array nat', arr => {
      const arrBefore = arr;
      (0, _lib.chooseRandom)(arr);
      return arrBefore === arr;
    });
  });
  it('Should default to return an empty array', () => {
    _jsverify2.default.assert(() => {
      return (0, _lib.chooseRandom)().length === 0;
    });
  });
  it('Should return an array with length equal to the given number (if provided)', () => {
    _jsverify2.default.assertForall('array nat', arr => {
      if (arr.length === 0 || arr.length === 1) {
        // Here the numItems value given to chooseRandom is irrelevent as
        // an array of length 0 or 1 should just return the given array
        // with no possibility of randomization.
        return arr === (0, _lib.chooseRandom)(arr, 948672894968) && arr === (0, _lib.chooseRandom)(arr, 0) && arr === (0, _lib.chooseRandom)(arr);
      }
      const random = (0, _lib.chooseRandom)(arr, 2);
      return random.length === 2;
    });
  });
});