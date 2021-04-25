import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | store/sections/editProduct', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:store/sections/edit-product');
    assert.ok(route);
  });
});
