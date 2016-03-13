import Ember from 'ember';
import layout from '../templates/components/md-btn';
import Button from '../mixins/md-button';

const { computed, Component } = Ember;

export default Component.extend(Button, {
  classNames: ['md-btn'],
  classNameBindings: ['_hasDropdown:dropdown-button'],
  attributeBindings: ['data-activates'],
  'data-activates': computed.alias('_dropdownMenuId'),
  tagName: 'button',
  _dropdownMenuId: null,
  _hasDropdown: computed('_dropdownMenuId', function() {
    return !!this.get('_dropdownMenuId');
  }),
  layout,
  didInsertElement() {
    this._super(...arguments);
    Ember.run.schedule('afterRender', () => {
      this.$().dropdown();
    });
  }
});
