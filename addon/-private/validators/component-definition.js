import BaseValidator from './-base';

const EXPECTED_CLASS_NAME = 'CurriedComponentDefinition';

export default class ComponentDefinitionValidator extends BaseValidator {
  check(value) {
    return !!(
      value &&
      value.constructor &&
      value.constructor.name === EXPECTED_CLASS_NAME
    );
  }
}
