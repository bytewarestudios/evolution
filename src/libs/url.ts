import { injectable } from 'inversify';
import 'reflect-metadata';
// import { IUrl } from '../ioc/interfaces/url.interface';
//import { TYPES } from '../ioc/types';

@injectable()
export class Url {

  /**
   * @description: Converts query params to an object by passing in the query string
   * of the url
   * @param {string} queryString
   * @returns {{[p: string]: any}}
   */
  public queryParamsToObject(queryString: string): {[key: string]: any} {
    return (queryStringValues = queryString.substring(1)) =>
      queryStringValues.split('&').map(queryStringValue => {
        const [key, value] = queryStringValue.split('=');
        return { [key]: decodeURIComponent(value) };
      });
  }
}
