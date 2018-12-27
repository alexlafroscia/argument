import Component from '@ember/component';
import { argument } from '@ember-decorators/argument';
import { ComponentDefinition } from '@ember-decorators/argument/types';
import { layout } from '@ember-decorators/component';

import template from '../templates/components/parent-component';

@layout(template)
export default class ParentComponentComponent extends Component {
  @argument(ComponentDefinition)
  child;
}
