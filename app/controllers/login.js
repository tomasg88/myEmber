import Ember from 'ember';

export default Ember.Controller.extend({
    
    actions: {
        logUser() {
        	var aux = this.get('store').findRecord('user', 1);
            console.log('aux: ' + aux.status + "\nmsg: " + aux.message);
        }
    }
    
});
