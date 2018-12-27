import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import waitForError from '../../../helpers/wait-for-error';

module('Integration | Validator | component-definition', function(hooks) {
  setupRenderingTest(hooks);

  test('asserts that it was passed a component definition', async function(assert) {
    const [error] = await Promise.all([
      waitForError(),
      render(hbs`{{parent-component}}`)
    ]);

    assert.equal(
      error.message,
      "ParentComponentComponent#child expected value of type [object Object] during 'init', but received: undefined"
    );
  });

  test('does not assert when passed a component instance', async function(assert) {
    assert.expect(0);

    await render(hbs`
      {{parent-component child=(component 'child-component')}}
    `);
  });
});
