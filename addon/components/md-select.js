import Ember from 'ember';
import layout from '../templates/components/md-select';
import TextComponent from '../mixins/text-component';

const { computed, Component } = Ember;

export default Component.extend({
  classNames: ['md-select', 'input-field'],
  content: ["1", "2", "3"],
  contentValueProp: '',
  contentDisplayProp: '',
  value: null,
  placeholder: null,
  _isDropdownOpen: false,
  layout,
  _placeholderText: computed('placeholder', 'value', function() {
    const ph = this.get('placeholder');
    if (ph) {return ph;}
    const val = this.get('value');
    if (!val) {return ' ';}
    else {return null;}
  }),

  didInitAttrs(attrs) {
    this._super(...arguments);
    var content = this.get('content');
    if (!content) {
      this.set('content', []);
    }
  },
  didInsertElement() {
    this._super(...arguments);
    this.$('select').material_select();
  },
  _choices: computed('content', 'contentValueProp', 'contentDisplayProp', {
    get() {
      const arr = this.get('content') || [];
      const choices = arr.map((x) => {
        return {
          value: Ember.get(x, this.get('contentValueProp')),
          text:  Ember.get(x, this.get('contentDisplayProp'))
        };
      });
      return choices
    }
  }),

  _rebuildSelect() {
    this.$('select').material_select('destroy');
    this.$('select').material_select();
  },

  actions: {
    change() {
      // const changeAction = this.get('action');
      const selectedEl = this.$('select')[0];
      const selectedIndex = selectedEl.selectedIndex;
      const content = this.get('content');
      const shift = this.get('_placeholderText') ? 1 : 0;
      const selectedValue = content[selectedIndex - shift];
      this.set('value', selectedValue);
      Ember.run.schedule('afterRender', () => {
        this._rebuildSelect();
      });
      // changeAction(selectedValue);
    }
  }
});
