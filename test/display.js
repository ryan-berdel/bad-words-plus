require('assert');
var Filter = require('../lib/badwords.js'),
  assert = require('better-assert');

describe('display', function () {
  describe('options', function () {

    it('first letter', function () {
      filter = new Filter({ firstLetter: true });
      filter.addWords('nerd*', 'dog', 'go');
      assert(filter.clean('damn nerdy') == 'd*** nerdy');
      assert(filter.clean("go dog go") == "g* d** g*");
    });

    it('first + last letter', function () {
      filter = new Filter({ firstLetter: true, lastLetter: true });
      filter.addWords('nerd', 'dog', 'go');
      assert(filter.clean('damn nerd') == 'd**n n**d');
      assert(filter.clean("go dog go") == "g* d*g g*");
    });

    it('last letter', function () {
      filter = new Filter({ lastLetter: true });
      filter.addWords('nerd', 'dog', 'go');
      assert(filter.clean('damn nerd') == '***n ***d');
      assert(filter.clean("go dog go") == "*o **g *o");
    });

  });
});
