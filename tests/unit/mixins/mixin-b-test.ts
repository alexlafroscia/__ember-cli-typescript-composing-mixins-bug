import EmberObject from '@ember/object';
import MixinBMixin from 'extend-multiple-mixins/mixins/mixin-b';
import { module, test } from 'qunit';

module('Unit | Mixin | mixin-b', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let MixinBObject = EmberObject.extend(MixinBMixin);
    let subject = MixinBObject.create();
    assert.ok(subject);
  });
});
