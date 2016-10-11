import Ember from 'ember';

let news = [{
  id: 1,
  title: 'Grand Old Mansion',
  author: 'Veruca Salt',
  text: 'San Francisco es una ciudad muy bonita y en este parametro iria lo que es una noticia con su formato de parrafos y demas sarasasasa',
  image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
}, {
  id: 2,
  title: 'Urban Living',
  author: 'Mike TV',
  text: 'Seattle seria la ultima nota que me falta redactar y ya estamos todos',
  image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
}, {
  id: 3,
  title: 'Downtown Charm',
  author: 'Violet Beauregarde',
  text: 'Lo mismo para Portland que debe ser una ciudad tambien muy linda pero la verdad que no tengo ni puta idea donde queda',
  image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg'
}];

export default Ember.Route.extend({
	model(){
		//return this.get('store').findAll('news');
    return news;
	}
});
