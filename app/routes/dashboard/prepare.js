import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default class DashboardPrepareRoute extends Route {
    model(params) {
        return RSVP.hash({
            order: this.store.findRecord('order', params.order_id),
        });
    }
}