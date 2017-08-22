export class HttpService {

  constructor() {
  }

  public get(url: string, queryParams?: Array<Object>): Promise<any> {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200 ) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(xhr.response);
          }
        }
      };
      xhr.open("GET", url + this.queryParamsToString(queryParams), true);
      xhr.send();
    });
  }

  public post(url: string, data: any) {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200 || xhr.status === 201) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(xhr.response);
          }
        }
      };

      xhr.open('POST', url, true);

      // set headers
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=utf-8");

      xhr.send(this.createPayloadFromObject(data));
    });
  }

  public createPayloadFromObject(requestParams: Object): string {
    let keyValuePairs = [];

    if (requestParams) {

      for (let requestParam in requestParams) {
        if (requestParams.hasOwnProperty(requestParam)) {
          keyValuePairs.push(encodeURIComponent(requestParam) + "=" + requestParams[encodeURIComponent(requestParam)]);
        }
      }

      return keyValuePairs.join("&");

    }

    return '';
  }

  public queryParamsToString(queryParams: Array<Object>): string {
    let keyValuePairs = [];

    if(queryParams) {

    queryParams.map(queryParams => {
      for (let queryParam in queryParams) {
        if (queryParams.hasOwnProperty(queryParam)) {
          keyValuePairs.push(encodeURIComponent(queryParam) + "=" + queryParams[encodeURIComponent(queryParam)]);
        }
      }
    });
    return `?${keyValuePairs.join("&")}`;
  }
  else {
    return '';
  }
  }

}
