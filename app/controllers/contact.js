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
      const email = this.get('messageEmail');
      const message = this.get('message');

      const newMessage = this.store.createRecord('contact', {
        messageEmail: email,
        message: message
      });

      newMessage.save().then((response) => {
        this.set('responseMessage', `We got your message and we’ll get in touch soon! Saved with id: ${response.get('id')}`);
        this.set('messageEmail', '');
        this.set('message', '');
      });

    }
  }

});

