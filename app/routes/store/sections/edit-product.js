import Route from '@ember/routing/route';
import { action } from '@ember/object';
import RSVP from 'rsvp';

export default class StoreSectionsEditProductRoute extends Route {
    model(params) {
        return RSVP.hash({
            product: this.store.findRecord('product', params.product_id),
        });
    }

    @action editProduct(model) {
        this.store.findRecord('product', model.product.id).then(function (product) {
            product.name = model.product.name;
            product.comments = model.product.comments;
            product.stock = model.product.stock;
            product.image = model.product.image;
            product.price = model.product.price;
            product.promotion = model.product.promotion;
            product.save();
        });
        this.transitionTo('store.sections')
    }
}