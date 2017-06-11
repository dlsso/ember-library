import Ember from 'ember';

export default Ember.Controller.extend({

  messageEmail: '',
  message: '',

  emailValid: Ember.computed.match('messageEmail', /^.+@.+\..+$/),
  haveMessage: Ember.computed.gte('message.length', 5),
  isValid: Ember.computed.and('emailValid', 'haveMessage'),
  isDisabled: Ember.computed.not('isValid'),

  actions: {

    sendMessage() {
      alert(`Sent message: ${this.get('message')} \n From: ${this.get('messageEmail')}`);
      this.set('responseMessage', `We got your message and we’ll get in touch soon!`);
      this.set('messageEmail', '');
      this.set('message', '');
    }
  }

});