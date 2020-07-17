require('assert');
var Filter = require('../lib/badwords.js'),
  assert = require('better-assert');

describe('display', function () {
  describe('options', function () {

    it('first letter', function () {
      filter = new Filter({ firstLetter: true });
      filter.addWords('nerd');
      assert(filter.clean('damn nerd') == 'd*** n***');
    });

    it('first + last letter', function () {
      filter = new Filter({ firstLetter: true, lastLetter: true });
      filter.addWords('nerd');
      assert(filter.clean('damn nerd') == 'd**n n**d');
    });

    it('last letter', function () {
      filter = new Filter({ lastLetter: true });
      filter.addWords('nerd');
      assert(filter.clean('damn nerd') == '***n ***d');
    });

  });
});
