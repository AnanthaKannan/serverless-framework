const response = require('../utility/API_Responses');
const Dynamo = require('../utility/dynamo')
const tableName = process.env.tableName;

exports.handler = async event => {

    if (!event.pathParameters || !event.pathParameters.ID) {
        return Response._400({message: 'missing path'})
    }

    const ID = event.pathParameters.ID;
    const user = JSON.parse(event.body);
    user.ID = ID;

    const newUser = await Dynamo.write(user, tableName)
                    .catch(err => {
                        console.log('writing error', err);
                        return null
                    })
    
    if(!newUser){
        return response._400({message: `Failed to write user by ID ${ID} in the Table ${tableName}`})
    }

    return response._200(user);
}
