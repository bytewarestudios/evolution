import { EmailValidator } from '../src/libs/validators/email.validator';
import Handlebars from 'handlebars';

const __ = (selector) => {
  return document.querySelector(selector);
}


const compile = Handlebars.compile(document.querySelector('[data-demo-form-template]').innerHTML);

__('[data-demo-form-target]').innerHTML = compile();

document.querySelector('[data-demo-form-target] [data-demo-form]')
  .addEventListener('submit', ($event) => {
    $event.preventDefault();
   const form = document.querySelector('[data-demo-form-target] [data-demo-form]');
   const invalidEmailMessage = `Please provide a valid email address.`;
   const emailValidation = new EmailValidator().invalidEmailMessage(form['emailAddress'].value, invalidEmailMessage);
   console.log(emailValidation);

   if (!emailValidation.isEmailValid) {

     document.querySelector('[data-email-message-invalid]').innerHTML = emailValidation.errorMessage;
     document.querySelector('[data-email-message-invalid]')
      .classList.remove('hide');
   } else {
     document.querySelector('[data-email-message-invalid]')
     .classList.add('hide');
   }

  });
