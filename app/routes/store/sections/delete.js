import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import StoreSectionsController from '../../../controllers/store/sections';

export default class StoreSectionsDeleteRoute extends Route {
    model(params) {
        return RSVP.hash({
            section: this.store.findRecord('section', params.section_id, { reload: true }),
        });
    }

    afterModel(model) {
        this.deleteProducts(model.section.products).then(() => {
            model.section.destroyRecord().then(
                this.transitionTo('store.sections')
            );
        });
    }

    async deleteProducts(products) {
        StoreSectionsController.showLoading();
        while (products.firstObject) {
            let p = products.firstObject;
            await p.destroyRecord();
        }
    }
}