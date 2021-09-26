const response = require('../utility/API_Responses');
const Dynamo = require('../utility/dynamo')
const tableName = process.env.tableName;

exports.handler = async event => {
    console.log('event', event)
    if (!event.pathParameters || !event.pathParameters.ID) {
        return Response._400({message: 'missing path'})
    }

    const ID = event.pathParameters.ID;
    const user = await Dynamo.get(ID, tableName)
                .catch(err => {
                    console.log('err', err)
                    return null;
                });
    
    if(!user){
        return response._400({message: `Failed to get user by ID ${ID} in the Table ${tableName}`})
    }

    return response._200(user);
}
