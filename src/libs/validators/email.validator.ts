import { emailValidator } from '../decorators/validation.decorators';

export class EmailValidator {

  constructor() {}

  @emailValidator
  public isEmailValid(emailAddress: string): boolean {
    return true;
  }

}