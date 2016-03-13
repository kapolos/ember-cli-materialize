import Ember from 'ember';
import layout from '../templates/components/md-card';

const { computed, Component } = Ember;

export default Ember.Component.extend({
  classNames: ['md-card', 'card'],
  title: null,
  image: null,
  _hasReveal: false,
  _extraTitleClasses: computed('_hasReveal', function() {
    return this.get('_hasReveal') ? 'activator' : '';
  }),
  _isTitleInContent: computed.empty('image'),
  layout
});
