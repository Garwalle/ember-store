import Route from '@ember/routing/route';

export default class DashboardPrepareCancelRoute extends Route {
    model(params) {
        return this.store.findRecord('order', params.order_id, { reload: true });
    }

    afterModel(model) {
        model.destroyRecord().then(this.transitionTo('dashboard'));
    }
}