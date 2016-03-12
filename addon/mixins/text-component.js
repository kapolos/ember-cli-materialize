import Ember from 'ember';

const { computed, Mixin } = Ember;

export default Mixin.create({
  value: '',
  label: '',
  disabled: false,
  placeholder: null,
  icon: null,
  inputClass: "",
  labelClass: "",
  _classesForInput: computed('inputClass', 'validate', function() {
    return `${this.get('inputClass')} ${this.get('validate') ? 'validate' : '' }`;
  }),
  _inputId: computed('elementId', function() {
    return `${this.get('elementId')}-${this._debugContainerKey.split(':')[1]}`;
  })
});
