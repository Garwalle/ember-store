import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default class StoreSectionsDeleteRoute extends Route {
    renderTemplate() {
        this.render({ outlet: 'loading' });
    }

    model(params) {
        return RSVP.hash({
            section: this.store.findRecord('section', params.section_id, { reload: true }),
        });
    }

    afterModel(model) {
        this.deleteProducts(model.section.products, model.section.id).then(() => {
            model.section.destroyRecord().then(
                this.transitionTo('store.sections'));
        });
    }

    async deleteProducts(products, sectionId) {
        $("#loading" + sectionId).show();
        while (products.firstObject) {
            let p = products.firstObject;
            await p.destroyRecord();
        }
        $("#loading" + sectionId).hide();
    }
}