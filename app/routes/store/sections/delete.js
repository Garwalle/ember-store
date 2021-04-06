import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { action } from '@ember/object';

export default class StoreSectionsDeleteRoute extends Route {
    model(params) {
        return RSVP.hash({
            section: this.store.findRecord('section', params.section_id, { reload: true }),
        });
    }

    afterModel(model) {
        model.section.deleteRecord();
        model.section.save().then(() => {
            this.transitionTo('store.sections');
        });
    }
}