import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import RSVP from 'rsvp';

export default class IndexRoute extends Route {
  @service userAuth;

  model() {
    if (this.userAuth.user) {
      let employeeLogged = this.userAuth.user;
      return RSVP.hash({
        connected: employeeLogged,
      });
    }
    else {
      return {};
    }
  }

  @action logout() {
    this.userAuth.logout();
    window.location.reload(true);
  }
}