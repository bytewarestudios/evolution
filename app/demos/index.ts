import { EmailValidator } from '../src/libs/validators/email.validator';
import { HandlebarsCompilationService} from '../src/libs/services/handlebars-compilation.service';

const __ = (selector) => {
  return document.querySelector(selector);
}

const handlebarsCompilationService = new HandlebarsCompilationService();
handlebarsCompilationService.compile(
  '[data-demo-form-template]',
  '[data-demo-form-target]'
   ,{
    formDemo: {
      title: 'Form validation demo'
    }
  });

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
