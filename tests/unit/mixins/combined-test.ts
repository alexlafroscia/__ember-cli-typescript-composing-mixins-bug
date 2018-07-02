import EmberObject from '@ember/object';
import CombinedMixin from 'extend-multiple-mixins/mixins/combined';
import { module, test } from 'qunit';

module('Unit | Mixin | combined', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let CombinedObject = EmberObject.extend(CombinedMixin);
    let subject = CombinedObject.create();
    assert.ok(subject);
  });
});
