import Ember from 'ember';
import layout from '../templates/components/md-fake-link';
import ClickAction from '../mixins/click-action';

const { Component } = Ember;

export default Component.extend(ClickAction, {
  layout,
  tagName: 'li'
});
