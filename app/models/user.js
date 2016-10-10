import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    email: DS.attr('string'),
    title: DS.attr('string'),
	password: DS.attr('string'),
	lastLoggedIn: DS.attr('date'),
	gravatarUrl: DS.attr()
});
