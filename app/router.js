/* Router.js
Este es el router ppal de Ember.
No matter how the URL gets set, the first thing that happens is that the Ember router maps the URL to a route handler
*/
import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('scientists');
  this.route('programmers');
  this.route('about');
  this.route('contact');
  this.route('news');
  this.route('login');
});

export default Router;
