import uniqueRandomArray from 'unique-random-array';
import metalBandNames from './metal-band-names.json';

var getRandomItem = uniqueRandomArray(metalBandNames);

module.exports = {
  all: metalBandNames,
  random: random
};

function random(number) {
  if (number === undefined) {
    return getRandomItem();
  } else {
    var randomItems = [];
    for (var i = 0; i < number; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
}

export default mainExport
module.exports = mainExport // for CommonJS compatibility
