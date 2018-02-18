import { injectable } from 'inversify';

@injectable()
export class URL {

  /**
   * @description: Converts query params to an object by passing in the query string
   * of the url
   * @param {string} queryString
   * @returns {{[p: string]: any}}
   */
  public queryParamsToObject(queryString: string): Array<{[key: string]: any}> {
    const queryStringValues = queryString.substring(1);
    return queryStringValues.split('&').map(queryStringValue => {
        const [key, value] = queryStringValue.split('=');
        return { [key]: decodeURIComponent(value) };
      });
  }
}
