const Dynamo = require('../../utility/dynamo');

test('dynamo should be object', () => {
    expect( typeof Dynamo).toBe('object');
});

test('should available get, write, update and delete function', () => {
    expect(typeof Dynamo.get).toBe('function');
    expect(typeof Dynamo.write).toBe('function');
    expect(typeof Dynamo.update).toBe('function');
    expect(typeof Dynamo.remove).toBe('function');
    expect(typeof Dynamo.query).toBe('function');
})

const validTableName = 'myTestTable';
const data = {ID: '120221', score: 100, place: 'Chennai'}

test('should write work', async() => {
    expect.assertions(1);
    try{
        const res = await Dynamo.write(data, validTableName);
        expect(res).toBe(data)
    }
    catch(e){
        console.log('error', e)
    }
})
