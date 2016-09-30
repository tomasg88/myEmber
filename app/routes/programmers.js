/*
ESTO ES UN ROUTE HANDLER. ESTA ASOCIADO A LOS MODELOS. Ej: este tiene un modelo qeu retorna un array de strings
 The route handler then typically does two things:

    It renders a template.
    It loads a model that is then available to the template

*/

import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return ["Geek N1", "Programmer N2"];
	}
});
