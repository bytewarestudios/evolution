import { HandlebarsCompilationService } from './handlebars-compilation.service';

describe('HandlebarsCompilationService', () => {
  describe('HandlebarsCompilationService methods', () => {
    let component;
    let componentInstance;
    let content;
    let expectedHTML;

    beforeEach(() => {
      content = `
        <h2 title="form validation demo">{{ formDemo.title }}</h2>
        <form name="demo-form" data-demo-form novalidate>
        <div>
          <label for="email-address">Email Address</label>
         <input name="emailAddress" id="email-address" type="email" value="" />
        </div>
        <p class="message--invalid hide" data-email-message-invalid>
          sample message
        </p>
        <button type="submit" class="button--submit" data-submit-form>submit form</button>
        </form>
      `;

      expectedHTML = `
        <h2 title="form validation demo">Form Validation Demo</h2>
        <form name="demo-form" data-demo-form novalidate>
        <div>
          <label for="email-address">Email Address</label>
         <input name="emailAddress" id="email-address" type="email" value="" />
        </div>
        <p class="message--invalid hide" data-email-message-invalid>
          sample message
        </p>
        <button type="submit" class="button--submit" data-submit-form>submit form</button>
        </form>
      `;

      document.body.innerHTML = `
        <script type="text/x-handlebars-template" data-demo-form-template>
          ${content}
        </script>
        <div data-demo-form-target></div>
      `;

      componentInstance = new HandlebarsCompilationService();
    });

    it('should compile the handlebars template and render it in a target element', () => {
      expect(componentInstance.compile('[data-demo-form-template]', '[data-demo-form-target]',
        {
          formDemo: {
            title: 'Form Validation Demo'
          }
        }).replace(/\s/g, '')).toBe(expectedHTML.replace(/\s/g, ''));
    });
  });
});