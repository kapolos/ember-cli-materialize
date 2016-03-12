import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('md-collection-linkitem', 'Integration | Component | md collection linkitem', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{md-collection-linkitem}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#md-collection-linkitem}}
      template block text
    {{/md-collection-linkitem}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
