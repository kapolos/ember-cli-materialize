import Ember from 'ember';
import layout from '../templates/components/md-collection-item';
import CollectionItem from '../mixins/collection-item';

const { Component } = Ember;

export default Component.extend(CollectionItem, {
  layout
});
