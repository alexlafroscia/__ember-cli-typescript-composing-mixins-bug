import EmberObject from '@ember/object';
import MixinAMixin from 'extend-multiple-mixins/mixins/mixin-a';
import { module, test } from 'qunit';

module('Unit | Mixin | mixin-a', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let MixinAObject = EmberObject.extend(MixinAMixin);
    let subject = MixinAObject.create();
    assert.ok(subject);
  });
});
