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

    @action showUiModal() {
        $('.tiny.modal').modal('show');
        // Demander de l'aide au prof pour comment récuperer l'id de la section et la sauvegarder dans un model (ou autre), afin que le linkTo du ui modal la récupère !
    }

    @action scrollToTitle() {
        var element = document.getElementById("sectionTitle");
        element.scrollIntoView({ behavior: 'smooth' });
    }
}