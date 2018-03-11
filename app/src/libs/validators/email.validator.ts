import { emailAddressValidator } from '../decorators/form/email-validation.decorator';

export class EmailValidator {

  constructor() {}

  @emailAddressValidator
  public isEmailValid(emailAddress: string): boolean {
    return this.isEmailValid(emailAddress);
  }

  public invalidEmailMessage(emailAddress: string, errorMessage: string): { isEmailValid: boolean, errorMessage: string } {
    return {
      isEmailValid: this.isEmailValid(emailAddress),
      errorMessage
    }

  }

}
