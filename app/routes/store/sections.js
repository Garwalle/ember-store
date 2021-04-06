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

    @action closeMessage() {
        document.getElementById("deleteMessage").style.display = "none";
    }

    @action scrollToTitle() {
        var element = document.getElementById("sectionTitle");
        element.scrollIntoView({ behavior: 'smooth' });
    }
}