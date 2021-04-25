import Route from '@ember/routing/route';
import { action } from '@ember/object';
import RSVP from 'rsvp';

export default class StoreSectionsDeleteProductRoute extends Route {
    model(params) {
        return RSVP.hash({
            product: this.store.findRecord('product', params.product_id, { reload: true }),
        });
    }

    @action didTransition() {
        jQuery(function() {
            $('#deleteProductModal').modal('show');
        })
    }

    @action delete(product) {
        product.destroyRecord();
    }
}