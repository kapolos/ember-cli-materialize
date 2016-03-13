import Ember from 'ember';
import layout from '../templates/components/md-btn';
import Button from '../mixins/md-button';
const { Component } = Ember;

export default Component.extend(Button, {
  classNames: ['md-btn'],
  tagName: 'button',
  layout
});
