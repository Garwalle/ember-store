import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class StoreSectionsEditProductRoute extends Route {
    model(params) {
        return this.store.findRecord('product', params.product_id);
    }

    @action editProduct(model) {
        this.store.findRecord('product', model.id).then(function (product) {
            product.name = model.name;
            product.comments = model.comments;
            product.stock = model.stock;
            product.image = model.image;
            product.price = model.price;
            product.promotion = model.promotion;
            product.save();
        });
        this.transitionTo('store.sections')
    }
}