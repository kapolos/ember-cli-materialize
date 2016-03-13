import Ember from 'ember';
import layout from '../templates/components/md-card-reveal';

export default Ember.Component.extend({
  classNames: ['md-card-reveal', 'card-reveal'],
  layout,

  init() {
    this._super(...arguments);
    this.attrs.card.set('_hasReveal', true);
  }
});
