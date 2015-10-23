import DS from 'ember-data';

export default DS.Model.extend({
  code: DS.attr('string'),
  region: DS.attr('string')
});
