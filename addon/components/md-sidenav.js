import Ember from 'ember';
import layout from '../templates/components/md-sidenav';

export default Ember.Component.extend({
  layout,
  classNames: ['side-nav'],
  tagName: 'ul'
});
