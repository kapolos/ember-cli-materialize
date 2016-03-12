import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('md-collapsible-item-header', 'Integration | Component | md collapsible item header', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{md-collapsible-item-header}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#md-collapsible-item-header}}
      template block text
    {{/md-collapsible-item-header}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
