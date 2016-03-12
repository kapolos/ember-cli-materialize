import Ember from 'ember';
import layout from '../templates/components/md-collection-header';

export default Ember.Component.extend({
  classNames: ['md-collection-header', 'collection-header'],
  layout,
  init() {
    this._super(...arguments);
    this.attrs.collectionComponent.set('_hasHeader', true);
  }
});
