import { EmailValidator } from '../src/libs/validators/email.validator';

document.querySelector('[data-demo-form]')
  .addEventListener('submit', ($event) => {
    $event.preventDefault();
  });

document.querySelector('[data-submit-form]')
  .addEventListener('click', ($event) => {
    $event.preventDefault();
    const form = document.querySelector('[data-demo-form]');
   new EmailValidator().isEmailValid(form['emailAddress'].value);
   console.log('email test: ', new EmailValidator().isEmailValid(form['emailAddress'].value));
});
