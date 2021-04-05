import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class StoreSectionsAddRoute extends Route {
    model() {
        return {};
    }

    @action add(sectionDATA) {
        let section = this.store.createRecord('section', sectionDATA);
        section.save().then(() => {
            this.transitionTo('store.sections');
        });
    }
}
