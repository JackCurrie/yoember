import Ember from 'ember';

export default Ember.Controller.extend({

  emailAddress: '',
  message: '',

  isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isMessageLongEnough: Ember.computed.gte('message.length', 5),

  // Button will be enabled when there is a valid email address entered,
  // and when there is a message of a valid length
  isEnabled: Ember.computed.and('isValidEmail', 'isMessageLongEnough'),
  isDisabled: Ember.computed.not('isEnabled'), 

 
  actions: {
    submitForm() {
      alert(`Email Address: ${this.get('emailAddress')}
             Message: ${this.get('message')}`) 
      this.set('responseMessage', "Thank you for your feedback!");
      this.set('emailAddress', '');       
    }      
  } 

});
