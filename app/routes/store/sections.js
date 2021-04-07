import Route from '@ember/routing/route';
import { action, set } from '@ember/object';
import RSVP from 'rsvp';
import AbstractRouteRoute from "../abstract-route";
import $ from 'jquery';

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

    @action deleteSection() {
        $("#sectionDeleteMessage").fadeIn();
    }

    @action closeMessage() {
        $("#sectionDeleteMessage").fadeOut();
    }

    @action scrollToTitle() {
        var element = document.getElementById("sectionTitle");
        element.scrollIntoView({ behavior: 'smooth' });
    }
}