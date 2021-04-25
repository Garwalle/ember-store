import Route from '@ember/routing/route';
import { action } from '@ember/object';
import RSVP from 'rsvp';

export default class StoreSectionsEditRoute extends Route {
    model(params) {
        return RSVP.hash({
            section: this.store.findRecord('section', params.section_id),
        });
    }

    @action rename(model) {
        this.store.findRecord('section', model.section.id).then(function (section) {
            section.name = model.section.name;
            section.save();
        });
        this.transitionTo('store.sections')
    }
}