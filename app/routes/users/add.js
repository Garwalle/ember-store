import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class UsersAddRoute extends Route {
  model() {
    return {};
  }

  @action save(userData) {
    let user = this.store.createRecord('user', userData);
    user.save().then(() => {
      this.transitionTo('users');
    });
  }
}
