import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('md-collapsible-items', 'Integration | Component | md collapsible items', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{md-collapsible-items}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#md-collapsible-items}}
      template block text
    {{/md-collapsible-items}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
