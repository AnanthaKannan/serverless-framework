const response = require('../utility/API_Responses');
const Dynamo = require('../utility/dynamo')
const tableName = process.env.tableName;

exports.handler = async event => {
    if (!event.pathParameters || !event.pathParameters.ID) {
        return Response._400({message: 'missing path'})
    }

    const key = {ID: event.pathParameters.ID };
    const data = await Dynamo.remove(key, tableName)
                .catch(err => {
                    console.log('err', err)
                    return null;
                });
    
    return response._200(data);
}
