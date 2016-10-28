// La ruta index no va en el router.js ya que se carga por defecto. Es convencion
// El codigo de abajo es para hacer que index redirija a una ruta predilecta

import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel(){
		this._super(...arguments);
		this.replaceWith('home');
	}
});
