import BaseValidator from './-base';

export default class AnyValue extends BaseValidator {
  check() {
    return true;
  }
}
