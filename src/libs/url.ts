/**
 * Created by larrylane on 5/12/17.
 */
export class Url {

  /**
   * Converts query params to an object
   */
  queryParamsToObject(url: string): JSON {

  var queryStringWithNoFragment;

  // if there are any query params
  if (window.location.href.indexOf('?') > -1) {

    // if there is an url fragment(hash route) and the hash is before the ?
    if (url.indexOf('#')  > -1 && (url.indexOf('#') > url.indexOf('?'))) {

      // remove the hash route from the query string
      queryStringWithNoFragment =  (url.substring(url.lastIndexOf('?') + 1 , url.lastIndexOf('#'))).split('/').join('');

    }
    else{

      // get the query string only, it should not contain a hash at this point.
      queryStringWithNoFragment = url.split('?')[1];

    }

    // convert all of the query params from the url into a JSON string
    var queryParamsJSON = ('{' + queryStringWithNoFragment.split('&')
    .map(function (keyValues) {
      return '"' + keyValues + '"';
    })
    .join(',') + '}')
    .split('=')
    .join('":"');

    // return the object literal converted from the JSON string
    return JSON.parse(queryParamsJSON);

  }

};

  onUrlChange(fn) {

  var currentLocation = location.href;

  setInterval(function() {

    if(location.href !== currentLocation) {

      currentLocation = location.href;

      fn();

    }

  }, 500);

};

}
