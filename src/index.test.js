import {expect} from 'chai';
import metalBandNames from './index';

describe('metal-band-names', function() {
  describe('all', function() {
    it('should be an array of strings', function() {
      expect(metalBandNames.all).to.satisfy(isArrayOfStrings);
    it('should contain `Megadeth`', function() {
      expect(metalBandNames.all).to.include('Megadeth');
    });
  });

  describe('random', function() {
    it('should return a random item from the metalBandNames.all', function() {
      var randomItem = metalBandNames.random();
      expect(metalBandNames.all).to.include(randomItem);
    });

    it('should return an array of random items if passed a number', function() {
      var randomItems = metalBandNames.random(3);
      expect(randomItems).to.have.length(3);
      randomItems.forEach(function(item) {
        expect(metalBandNames.all).to.include(item);
      });
    });
  });
});
function isArrayOfStrings(array) {
  return array.every(i => typeof i === 'string')
}

function isIncludedIn(array) {
  return item => array.includes(item)
}
