import { HandlebarsCompilationService } from './handlebars-compilation.service';

describe('EmailValidator', () => {
  describe('EmailValidator methods', () => {
    let component;
    let componentInstance;
    beforeEach(() => {
      document.body.innerHTML = `
      <script type="text/x-handlebars-template" data-emo-form-template>
  <h2 title="form validation demo">{{ formDemo.title }}</h2>
<form name="demo-form" data-demo-form novalidate>

  <label for="email-address">Email Address</label>
  <div>
    <input name="emailAddress" id="email-address" type="email" value="" />
  </div>
    <p class="message--invalid hide" data-email-message-invalid>
      sample message
    </p>
  <button type="submit" class="button--submit" data-submit-form>submit form</button>
</form>
</script>

<div data-demo-form-target></div>
      `;
      componentInstance = new HandlebarsCompilationService();
    });

    it('isEmailValid() returns true', () => {
      const emailAddress = 'somebody@gmail.com';
      expect(componentInstance.isEmailValid(emailAddress)).toBe(true);
    });
  });
});