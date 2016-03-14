import Ember from 'ember';

const { computed, Mixin } = Ember;

export default Mixin.create({
  attributeBindings: ['data-activates'],
  'data-activates': computed.alias('_dropdownMenuId'),
  _dropdownMenuId: null,
  classNameBindings: ['_hasDropdown:dropdown-button'],
  _hasDropdown: computed('_dropdownMenuId', function() {
    return !!this.get('_dropdownMenuId');
  }),
  didInsertElement() {
    this._super(...arguments);
    Ember.run.schedule('afterRender', () => {
      this.$().dropdown();
    });
  }
})
