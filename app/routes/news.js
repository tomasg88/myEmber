import Ember from 'ember';

let news = [{
  title: 'Grand Old Mansion',
  author: 'Veruca Salt',
  text: 'San Francisco',
  image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
}, {
  title: 'Urban Living',
  author: 'Mike TV',
  text: 'Seattle',
  image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
}, {
  title: 'Downtown Charm',
  author: 'Violet Beauregarde',
  text: 'Portland',
  image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg'
}];

export default Ember.Route.extend({
	model(){
		//return this.get('store').findAll('news');
    return news;
	}
});
