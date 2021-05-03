import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import RSVP from 'rsvp';
import AbstractRouteRoute from "./abstract-route";

export default class IndexRoute extends AbstractRouteRoute {
  @service userAuth;

  model() {
    if (this.userAuth.user) {
      return RSVP.hash({
        connected: this.userAuth.user,
      });
    }
    else {
      return{};
    }
  }

  @action login(user) {
    this.store.query('employee', {
      filter: { email: user.email, },
    }).then((employees) => {
      if (employees.length) {
        let connected = employees.firstObject;
        if (connected.password && connected.password === user.password) {
          this.userAuth.login(connected);
          window.location.reload(true);
        }
      }
    });
  }
}
