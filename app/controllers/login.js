import Ember from 'ember';

export default Ember.Controller.extend({
    
    actions: {
        logUser() {
            alert(this.get('store').findRecord('user', 1));
        }
    }
    
});
