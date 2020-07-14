require('assert');
var Filter = require('../lib/badwords.js'),
assert = require('better-assert');
const { filter } = require('badwords-list/lib/array');

describe('options', function() {
  describe('split regex', function() {

    it('default value', function() {
      testFilter = new Filter();
      testFilter.addWords('français');
      assert(testFilter.clean('fucking asshole') == 'f*****g a*****e');
      assert(testFilter.clean('mot en français') == 'mot en français');
    });

    it('override value', function() {
      testFilter = new Filter({splitRegex: / /});
      testFilter.addWords('français');
      assert(testFilter.clean('fucking asshole') == 'f*****g a*****e');
      assert(testFilter.clean('mot en français') == 'mot en f******s');
    });


  });
});
