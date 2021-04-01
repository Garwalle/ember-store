import Route from '@ember/routing/route';
import { action, set } from '@ember/object';
import RSVP from 'rsvp';
import AbstractRouteRoute from "./abstract-route";

export default class UsersRoute extends AbstractRouteRoute {
    model() {
        if (this.userAuth.user) {
            let employeeLogged = this.userAuth.user;
            return RSVP.hash({
                connected: employeeLogged,
                ordersCreated: this.store.query('order', { filter: { idEmployee: employeeLogged.id, status: 'created' } }),
                ordersPrepared: this.store.query('order', { filter: { idEmployee: employeeLogged.id, status: 'prepared' } }),
                ordersDelivered: this.store.query('order', { filter: { idEmployee: employeeLogged.id, status: 'delivered' } }),
            });
        }
    }
}