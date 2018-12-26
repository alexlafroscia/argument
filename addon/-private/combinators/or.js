import BaseValidator from '../validators/-base';

export class OrValidator extends BaseValidator {
  constructor(...validators) {
    super();

    this.validators = validators;
  }

  check(value) {
    return this.validators.reduce(
      (acc, validator) => acc || validator.check(value),
      false
    );
  }
}

export default function or(...validators) {
  return new OrValidator(...validators);
}
