import EmberRouter from '@ember/routing/router';
import config from 'store/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('users', function () {
    this.route('add');
  });
  this.route('products', function () {
    this.route('add');
    this.route('update', { path: 'update/:product_id' });
  });
  this.route('dashboard', function() {
    this.route('prepare', { path: 'prepare/:order_id' }, function() {
      this.route('cancel', { path: 'cancel/:order_id' });
      this.route('prepared', { path: 'prepared/:order_id' });
    });
  });
  this.route('store', function() {
    this.route('sections', function() {
      this.route('add');
      this.route('delete', { path: 'delete/:section_id' });
      this.route('edit', { path: 'edit/:section_id' });
      this.route('addProduct', { path: 'addProduct/:section_id' });
      this.route('deleteProduct', { path: 'deleteProduct/:product_id' });
      this.route('editProduct', { path: 'editProduct/:product_id' });
    });
  });
  this.route('notFound', { path: '/*path' });
});