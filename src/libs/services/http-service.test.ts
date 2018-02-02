import { HttpService } from './http.service';

const httpService = new HttpService();
it('expect post request payload to be created', () => {
  const mockPayload = {
    title: 'foo',
    body: 'bar',
    userId: 1
  };

  expect(httpService.createPayloadFromObject(mockPayload)).toEqual('title=foo&body=bar&userId=1');
})