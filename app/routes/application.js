import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class IndexRoute extends Route {
  @service userAuth;

  model() {
    return {};
  }

  @action logout() {
    this.userAuth.logout();
    this.transitionTo('index');
  }
}