import Route from '@ember/routing/route';
import { action, set } from '@ember/object';
import RSVP from 'rsvp';
import AbstractRouteRoute from "./abstract-route";

export default class UsersRoute extends AbstractRouteRoute {
  model() {
    return RSVP.hash({
      users: this.store.findAll('user', { include: 'orders' }),
      connected: this.userAuth.user,
    });
  }
  
  @action remove(user, model) {
    set(model, 'deleted', user);
    user.destroyRecord().then(() => { });
  }
}
