import request from 'supertest';
import { coffeeapp } from '../app';
// ⚠️ This should error as "../app" doesn't exist yet!
describe('Test home API endpoint request', () => {
test('GET should return correct message', async () => {
const res = await request(coffeeapp).get('/');
expect(res.statusCode).toEqual(200);
expect(res.text).toEqual('I like coffee!');
//expect(res.text).toEqual('This should fail!');

});
});