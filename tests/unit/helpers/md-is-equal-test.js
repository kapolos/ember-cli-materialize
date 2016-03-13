import { mdIsEqual } from 'dummy/helpers/md-is-equal';
import { module, test } from 'qunit';

module('Unit | Helper | md is equal');

// Replace this with your real tests.
test('it works', function(assert) {
  assert.ok(mdIsEqual(['42', 42]));
  assert.ok(mdIsEqual([42, 42]));
  assert.ok(mdIsEqual(['42', '42']));
});
