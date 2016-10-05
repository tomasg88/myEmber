import Ember from 'ember';

let news = [{
  id: 0,
  title: 'Grand Old Mansion',
  author: 'Veruca Salt',
  text: 'San Francisco',
  publishDate: 'Estate',
  image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
}, {
  id: 1,
  title: 'Urban Living',
  author: 'Mike TV',
  text: 'Seattle',
  publishDate: 'Condo',
  image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
}, {
  id: 2,
  title: 'Downtown Charm',
  author: 'Violet Beauregarde',
  text: 'Portland',
  publishDate: 'Apartment',
  image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg'
}];

export default Ember.Route.extend({
	model(){
		return news;
	}
});
