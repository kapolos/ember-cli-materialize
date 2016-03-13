import Ember from 'ember';

export function mdIsEqual(params/*, hash*/) {
  const [a, b] = params;
  return `${a}` === `${b}`;
}

export default Ember.Helper.helper(mdIsEqual);
