import uniqueRandomArray from 'unique-random-array';
import metalBandNames from './metal-band-names.json';

const getRandomItem = uniqueRandomArray(metalBandNames);

const mainExport = {
  all: metalBandNames,
  random: random
};

function random(number) {
  if (number === undefined) {
    return getRandomItem();
  } else {
    const randomItems = [];
    for (let i = 0; i < number; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
}

export default mainExport
module.exports = mainExport // for CommonJS compatibility
