import { renderTemplate } from '../decorators/template/render-template.decorator';

export class HandlebarsCompilationService {

  constructor() {
  }

  /**
   * @description: Compiles handlebar templates
   * @param {string} templateSelector
   * @param {string} templateTarget
   * @param {{[p: string]: any}} data
   * @returns {any}
   */
  @renderTemplate
  public compile(templateSelector: string, templateTarget: string, data?: { [ key: string]: any}): any {
      return this.compile(templateSelector, templateTarget, data);
  }
}
