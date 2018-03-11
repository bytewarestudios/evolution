import Handlebars from 'handlebars';

export function renderTemplate(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
  descriptor.value = function(templateSelector: string, templateTarget: string, data?: { [ key: string]: any}) {
    const compile = Handlebars.compile(document.querySelector(templateSelector).innerHTML);
    if (templateSelector && typeof compile === 'function' && templateTarget && data) {
      return document.querySelector(`${templateTarget}`).innerHTML = compile(data);
    } else if (templateSelector && typeof compile === 'function' && templateTarget){
      return document.querySelector(`${templateTarget}`).innerHTML = compile();
    }
  }
  return descriptor;
}
