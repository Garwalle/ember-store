import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { action } from '@ember/object';

export default class ProductsAddRoute extends Route {
  model() {
    return RSVP.hash({
      sections: this.store.findAll('section'),
      products: this.store.findAll('product'),
      product: { packs: [] },
    });
  }
  @action save(p) {
    let product = this.store.createRecord('product', p);
    product.save().then(() => {
      this.transitionTo('products');
    });
  }
}
