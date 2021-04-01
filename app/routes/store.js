import Route from '@ember/routing/route';

export default class StoreRoute extends Route {
    beforeModel() {
        this.transitionTo('store.sections');
    }
}
