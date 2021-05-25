import Route from '@ember/routing/route';
import { tracked } from '@glimmer/tracking';
import RSVP from 'rsvp';

export default class DashboardPrepareRoute extends Route {
    model(params) {
            return this.store.findRecord('order', params.order_id, { include: 'user' },  { include: 'orderdetails' } );
        }
}