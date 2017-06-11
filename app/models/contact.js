import DS from 'ember-data';

export default DS.Model.extend({
  messageEmail: DS.attr('string'),
  message: DS.attr('string')
});
