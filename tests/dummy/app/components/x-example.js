import Ember from 'ember';

const { computed, Component } = Ember;

export default Component.extend({
  classNames: ['x-example'],
  horizSplit: 6,
  nameOfTemplate: computed('name', function() {
    return `${this.get('name')}.hbs`;
  }),
  nameOfPartial: computed('name', function() {
    return `snippets/${this.get('name')}`;
  }),
  _horizClassOption1: computed('horizSplit', function() {
    const s = this.get('horizSplit');
    if (s < 0) {
      return '';
    }
    else {
      return `m${s}`;
    }
  }),
  _horizClassOption2: computed('horizSplit', function() {
    const s = this.get('horizSplit');
    if (s < 0) {
      return '';
    }
    else {
      return `m${12-s}`;
    }
  }),
  actions: {
    wasClicked(arg) {
      alert(arg);
    },
    pageChanged() {
      this.sendAction('pageChanged', ...arguments);
    }
  }
});
