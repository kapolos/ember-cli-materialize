import Ember from 'ember';

const { computed, Component } = Ember;

export default Component.extend({
  classNames: ['x-example'],
  nameOfTemplate: computed('name', function() {
    return `${this.get('name')}.hbs`;
  }),
  nameOfPartial: computed('name', function() {
    return `snippets/${this.get('name')}`;
  }),
  actions: {
    pageChanged() {
      this.sendAction('pageChanged', ...arguments);
    }
  }
});
