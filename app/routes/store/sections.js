import Route from '@ember/routing/route';
import { action, set } from '@ember/object';
import RSVP from 'rsvp';
import AbstractRouteRoute from "../abstract-route";

export default class StoreSectionRoute extends AbstractRouteRoute {
    model() {
        if (this.userAuth.user) {
            let employeeLogged = this.userAuth.user;
            return RSVP.hash({
                connected: employeeLogged,
                sections: this.store.findAll('section', { include: 'products' }),
            });
        }
    }

    @action showAddForm() {
        if (Ember.getOwner(this).lookup('controller:application').currentPath === 'store.sections.index') {
            this.transitionTo('store.sections.add');
        }
        else {
            this.transitionTo('store.sections.index');
        }
    }
}