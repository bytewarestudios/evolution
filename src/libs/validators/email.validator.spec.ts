import { EmailValidator } from './email.validator';

describe('EmailValidator', () => {
  describe('EmailValidator methods', () => {
    let component;
    let componentInstance;
    beforeEach(() => {
      componentInstance = new EmailValidator();
    });

    it('isEmailValid() returns true', () => {
      const emailAddress = 'somebody@gmail.com';
      expect(componentInstance.isEmailValid(emailAddress)).toBe(true);
    });

    it('isEmailValid() returns false', () => {
      const emailAddress = 'somebody.gmail.com';
      expect(componentInstance.isEmailValid(emailAddress)).toBe(false);
    });
  });
});
