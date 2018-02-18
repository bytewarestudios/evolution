import { URL } from './url';

describe('url.ts Url Class', () => {
  describe('URL methods', () => {
    let component;
    let componentInstance;
    let componentInstanceProxy;
    beforeEach(() => {
      componentInstance = new URL();
    });

    it('queryParamsToObject() return an object with key value pairs', () => {
       const queryString = '?paramone=one&paramtwo=two';

       expect(componentInstance.queryParamsToObject(queryString)[0].paramone).toBe('one');
       expect(componentInstance.queryParamsToObject(queryString)[1].paramtwo).toBe('two');
    });
  });
});
