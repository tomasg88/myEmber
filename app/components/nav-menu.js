import Ember from 'ember';

export default Ember.Component.extend({
	// Vamos a definir variables para que segun la variable, renderee el menu de una forma u otra
    dynamicClass: "secondary",

    init: function(){
        this._super(...arguments);
        this.dynamicClass = "fixed";
    }

});
