const response = require('../API_Responses');

test('Response is an object', () => {
    expect(typeof response).toBe('object')
});

test('_200 works', () => {
    const res = response._200({name:'organization'});
    expect(res.statusCode).toBe(200);
    expect(typeof res.body).toBe('string');
    expect(res.headers['Content-Type']).toBe('application/json')
});

test('_400 works', () => {
    const res = response._400({name:'organization'});
    expect(res.statusCode).toBe(400);
    expect(typeof res.body).toBe('string');
    expect(res.headers['Content-Type']).toBe('application/json')
});

test('define response', () => {
    const statusCode = 382;
    const body = {any: 'thing'};
    const res = response._defineResponses(statusCode, body);
    expect(res.statusCode).toBe(statusCode);
    expect(res.body).toBe(JSON.stringify(body))
});