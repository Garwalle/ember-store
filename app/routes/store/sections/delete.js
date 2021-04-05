import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { action } from '@ember/object';

export default class StoreSectionsDeleteRoute extends Route {
    model(params) {
        return RSVP.hash({
            section: this.store.findRecord('sections', params.section_id),
        });
    }

    @action delete(section) {
        section.deleteRecord();
        section.save().then(() => {
            this.transitionTo('store.sections');
        });
    }
}