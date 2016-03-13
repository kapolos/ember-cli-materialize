import Ember from 'ember';

const { computed, Mixin } = Ember;

export default Mixin.create({
  baseButtonClass: 'btn',
  classNameBindings: ['_isWaves:waves-effect', '_waveType', 'baseButtonClass'],
  attributeBindings: ['disabled'],
  waves: 'light',
  iconClass: 'left',
  _isWaves: computed('waves', function() {
    return !!this.get('waves');
  }),
  _waveType: computed('waves', function() {
    return `waves-${this.get('waves')}`;
  }),
  click() {
    this.sendAction('on-click');
  }
});
