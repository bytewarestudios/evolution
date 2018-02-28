import { renderTemplate } from '../decorators/template/render-template.decorator';

export class HandlebarsCompilationService {

  constructor() {
  }

  @renderTemplate
  public compile(templateSelector: string, templateTarget: string, data?: { [ key: string]: any}): any {
      return this.compile(templateSelector, templateTarget, data);
  }
}
