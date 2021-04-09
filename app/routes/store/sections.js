import AbstractRouteRoute from "../abstract-route";
import { action } from '@ember/object';
import RSVP from 'rsvp';


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

    @action scrollToTitle() {
        document.getElementById("sectionTitle").scrollIntoView({ behavior: 'smooth' });
    }
}