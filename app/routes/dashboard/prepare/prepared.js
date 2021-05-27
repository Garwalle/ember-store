import Route from '@ember/routing/route';

export default class DashboardPreparePreparedRoute extends Route {
    model(params) {
        return this.store.findRecord('order', params.order_id);
    }

    afterModel(model) {
        this.store.findRecord('order', model.id).then(function (order) {
            order.status = 'prepared';
            order.save();
        });
        this.transitionTo('dashboard');
    }
}