import Component from '@ember/component';
import { argument } from '@ember-decorators/argument';
import {
  arrayOf,
  optional,
  oneOf,
  shapeOf,
  unionOf,
  Action,
  ClosureAction,
  Element,
  Node
} from '@ember-decorators/argument/types';
import { layout } from '@ember-decorators/component';

import template from '../templates/components/kitchen-sink';

@layout(template)
export default class KitchenSinkComponent extends Component {
  @argument('string')
  someString;

  @argument(arrayOf(unionOf(Element, Node)))
  someElements;

  @argument(oneOf(Action, ClosureAction))
  SVGComponentTransferFunctionElement;

  @argument(optional('number'))
  someOptionalNumber;

  @argument(shapeOf({ key: 'string' }))
  someObjectWithAKeyProp;
}
