// PAGINA: In a route's model() method, you return whatever data you want to make available to the template
// Archivo especifico de la ruta /scientists. Aca defino el/los modelo/s asociado/s a LA RUTA
import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return ["Cientifico loco", "Dr. Neurus", "Frankenstein creator"];
	}
});
