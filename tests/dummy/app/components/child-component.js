import Component from '@ember/component';
import { layout } from '@ember-decorators/component';

import template from '../templates/components/child-component';

@layout(template)
export default class ChildComponentComponent extends Component {}
